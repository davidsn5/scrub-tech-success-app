import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'
import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { instrumentName, features } = await req.json()
    
    if (!instrumentName) {
      throw new Error('Instrument name is required')
    }

    console.log('Generating image for instrument:', instrumentName)

    // Create detailed prompt for surgical instrument
    const prompt = `A professional, high-quality photograph of a ${instrumentName} surgical instrument on a clean white background. The instrument should be photographed from a slight angle to show its three-dimensional form and key identifying features. Studio lighting with soft shadows, medical photography style, crisp details showing the metal finish and construction. The instrument should be clean, sterile, and positioned to clearly show its functional parts${features ? ` including ${features}` : ''}. Professional medical equipment photography, ultra-sharp focus, neutral lighting, minimal shadows.`
    
    console.log('Using prompt:', prompt)

    const hf = new HfInference(Deno.env.get('HUGGING_FACE_ACCESS_TOKEN'))

    const image = await hf.textToImage({
      inputs: prompt,
      model: 'black-forest-labs/FLUX.1-schnell',
    })

    // Convert the blob to a base64 string
    const arrayBuffer = await image.arrayBuffer()
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))

    return new Response(
      JSON.stringify({ 
        image: `data:image/png;base64,${base64}`,
        instrumentName,
        prompt 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in generate-instrument-image-hf function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate image', 
        details: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    )
  }
})