import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { instrumentName, category, characteristics } = await req.json();
    
    if (!instrumentName) {
      throw new Error('Instrument name is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    console.log(`Generating image for instrument: ${instrumentName}`);

    // Create a detailed prompt for realistic surgical instrument photography
    const prompt = `A professional, high-quality photograph of a ${instrumentName} surgical instrument on a clean white background. The instrument should be photographed from a slight angle to show its three-dimensional form and key identifying features. Studio lighting with soft shadows, medical photography style, crisp details showing the metal finish and construction. The instrument should be clean, sterile, and positioned to clearly show its functional parts including ${characteristics.slice(0, 2).join(' and ')}. Professional medical equipment photography, ultra-sharp focus, neutral lighting, minimal shadows.`;

    console.log(`Using prompt: ${prompt}`);

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: prompt,
        n: 1,
        size: '1024x1024',
        quality: 'high',
        background: 'opaque',
        output_format: 'png'
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', errorData);
      throw new Error(`OpenAI API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');

    if (!data.data?.[0]?.b64_json) {
      console.error('No image data in response:', data);
      throw new Error('No image data returned from OpenAI');
    }

    const imageBase64 = data.data[0].b64_json;

    return new Response(JSON.stringify({ 
      success: true,
      imageData: `data:image/png;base64,${imageBase64}`,
      instrumentName,
      category
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-instrument-image function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});