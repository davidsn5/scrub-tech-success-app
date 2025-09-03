import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CopyrightNotice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold mb-6">Copyright Notice</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">Copyright Protection</h2>
              <p>
                This website and all of its content, including but not limited to text, graphics, 
                images, logos, button icons, audio clips, data compilations, software, and the 
                compilation thereof (collectively, the "Content") are the property of Surgical Tech 
                Review or its content suppliers and are protected by United States and international 
                copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">All Rights Reserved</h2>
              <p>
                All rights reserved. No part of this website or any of its contents may be 
                reproduced, copied, modified or adapted, without the prior written consent of 
                Surgical Tech Review, unless otherwise indicated for stand-alone materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Permitted Use</h2>
              <p>
                You may view, download, and print pages from this website for your own personal 
                use, subject to the restrictions set out below and elsewhere in these terms and 
                conditions. You must not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Republish material from this website (including republication on another website)</li>
                <li>Sell, rent, or sub-license material from the website</li>
                <li>Show any material from the website in public</li>
                <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for commercial purposes</li>
                <li>Redistribute content from this website (except for content specifically and expressly made available for redistribution)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Study Materials and Questions</h2>
              <p>
                The exam questions, study materials, flashcards, and educational content provided 
                on this website are proprietary and copyrighted materials. These materials are 
                designed exclusively for individual study purposes by registered users of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Enforcement</h2>
              <p>
                Surgical Tech Review actively monitors for copyright infringement and will take 
                appropriate action against violators, including but not limited to legal proceedings 
                for damages and injunctive relief.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <p>
                If you have any questions about our copyright policy or believe that content on 
                our website infringes your copyright, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> SurgicalTechReview@gmail.com
              </p>
            </section>

            <section className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm mt-2">
                © {new Date().getFullYear()} Surgical Tech Review. All rights reserved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightNotice;