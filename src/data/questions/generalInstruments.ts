export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const generalInstrumentsQuestions: Question[] = [
  {
    id: 1,
    question: "Identify this surgical instrument:",
    choices: [
      "Backhaus Towel Clamp",
      "Lorna Towel Clamp",
      "Allis Forceps",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "The Lorna Towel Clamp is a non-perforating clamp typically 5.5 inches (14 cm) in length. It is used to secure surgical drapes and towels to the patient's skin or surgical field without puncturing through the material.",
    image: "/lovable-uploads/0481ae1d-6f04-4d7f-b490-2f5892dc6421.png"
  },
  {
    id: 2,
    question: "Identify this surgical instrument:",
    choices: [
      "Lorna Towel Clamp",
      "Backhaus Towel Clamp",
      "Allis Forceps",
      "Babcock Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Backhaus Towel Clamp is a perforating clamp typically 5.5 inches (14 cm) in length. It features sharp pointed tips that penetrate through surgical drapes and towels to secure them firmly to the patient or draping material.",
    image: "/lovable-uploads/be72b641-6e4b-4440-a858-a90063df4c16.png"
  },
  {
    id: 3,
    question: "Identify this surgical instrument:",
    choices: [
      "Rochester Pean",
      "Curved Crile",
      "Kelly Clamp",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "The Curved Crile hemostat is a medium-sized surgical clamp typically 5.5-6.25 inches (14-16 cm) in length. It features a curved tip with transverse serrations for secure clamping of blood vessels and tissue.",
    image: "/lovable-uploads/771d9991-b6ef-46ed-a651-6652cf5ea8ca.png"
  },
  {
    id: 4,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Foerster Sponge Stick",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "The Foerster Sponge Stick is a long surgical instrument typically 9.5-10 inches (24-25 cm) in length. It features ring handles and serrated jaws designed to securely hold gauze sponges or other materials.",
    image: "/lovable-uploads/cc624773-e623-4e92-81d6-fe57f75a53b3.png"
  },
  {
    id: 5,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Kelly Clamp",
      "Mixter Right Angle",
      "Rochester Pean"
    ],
    correctAnswer: 2,
    explanation: "The Mixter Right Angle hemostat is a curved surgical clamp typically 7-9 inches (18-23 cm) in length. It features a distinctive right-angle curve near the tip with serrated jaws for secure clamping in hard-to-reach areas.",
    image: "/lovable-uploads/4379375d-6a06-4540-84a6-7eb77dd41537.png"
  },
  {
    id: 6,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Rochester Pean",
      "Kelly Clamp",
      "Halstead Mosquito"
    ],
    correctAnswer: 1,
    explanation: "The Rochester Pean hemostat is a medium-sized surgical clamp typically 5.5-6.25 inches (14-16 cm) in length. It features a curved tip with transverse serrations for secure clamping of blood vessels and tissue.",
    image: "/lovable-uploads/428c99f3-12db-4068-a414-4df52acb2740.png"
  },
  {
    id: 7,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Kelly Clamp",
      "Halstead Mosquito",
      "Rochester Pean"
    ],
    correctAnswer: 2,
    explanation: "The Halstead Mosquito hemostat is a small, delicate surgical clamp typically 5 inches (12.5 cm) in length. It features fine, curved jaws with transverse serrations designed for clamping small blood vessels and delicate tissues.",
    image: "/lovable-uploads/halstead-mosquito-clamp.png"
  },
  {
    id: 8,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Kocher Clamp",
      "Babcock Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Kocher clamp is a heavy-duty surgical instrument available in both straight and curved versions, typically 6-8 inches (15-20 cm) in length. It features distinctive 1×2 teeth at the tip and transverse serrations for secure grasping of thick tissue.",
    image: "/lovable-uploads/b83510c2-04ba-4fd2-8e9c-10039f51486d.png"
  },
  {
    id: 9,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Scissors (Curved)",
      "Metzenbaum Scissors",
      "Laney Goiter Scissors",
      "Lister Scissors"
    ],
    correctAnswer: 1,
    explanation: "Metzenbaum scissors are delicate surgical scissors typically 5-7 inches (13-18 cm) in length with long, slender blades and blunt tips. The curved variety is particularly useful for dissecting around organs and in deep surgical sites.",
    image: "/lovable-uploads/924ee28a-8970-454a-8351-e938e48d12b7.png"
  },
  {
    id: 10,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Scissors (Straight)",
      "Metzenbaum Scissors",
      "Laney Goiter Scissors",
      "Lister Scissors"
    ],
    correctAnswer: 0,
    explanation: "Mayo scissors are heavy-duty surgical scissors typically 6-7 inches (15-18 cm) in length with thick, sturdy blades and blunt tips. The straight variety is particularly useful for cutting at surface level and in accessible areas.",
    image: "/lovable-uploads/e74a51fe-906e-480f-b992-c22b64e35da7.png"
  },
  {
    id: 11,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Scissors (Straight)",
      "Metzenbaum Scissors",
      "Mayo Scissors (Curved)",
      "Laney Goiter Scissors"
    ],
    correctAnswer: 2,
    explanation: "Curved Mayo scissors are heavy-duty surgical scissors typically 6-7 inches (15-18 cm) in length with thick, sturdy blades and blunt tips. The curved design allows for better access around anatomical structures.",
    image: "/lovable-uploads/efef353f-91f8-4a1e-a907-a5f843242693.png"
  },
  {
    id: 12,
    question: "Identify this surgical instrument and its compatible blade sizes:",
    choices: [
      "#7 Knife Handle",
      "#3 Knife Handle",
      "Beaver Blade Handle",
      "#4 Knife Handle"
    ],
    correctAnswer: 1,
    explanation: "The #3 knife handle is a standard surgical scalpel handle approximately 5 inches (13 cm) in length. This handle is compatible with blade sizes #10, #11, #12, #13, and #15.",
    image: "/lovable-uploads/a65b6129-9f75-4b8c-bfdb-26cc77272439.png"
  },
  {
    id: 13,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Russian Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Babcock forceps are atraumatic tissue grasping instruments typically 6-9 inches (15-23 cm) in length. They feature distinctive fenestrated (windowed) jaws with smooth inner surfaces that provide secure yet gentle tissue handling.",
    image: "/lovable-uploads/d1427bc2-7fa6-4486-bafd-3371c3c1debf.png"
  },
  {
    id: 14,
    question: "Identify this surgical instrument:",
    choices: [
      "Yankauer Suction",
      "Poole Suction",
      "Frazier Suction",
      "Tonsillar Suction"
    ],
    correctAnswer: 1,
    explanation: "The Poole suction tip is a specialized suction device designed for efficient removal of large volumes of fluid and debris from the surgical field. It features multiple side holes that prevent tissue from being drawn into the suction.",
    image: "/lovable-uploads/71aebe58-86ef-4b39-9e7d-baa0b632768a.png"
  },
  {
    id: 15,
    question: "Identify this surgical instrument:",
    choices: [
      "Deaver Retractor",
      "Richardson Retractor",
      "Harrington Retractor",
      "Kelly Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Richardson retractor is a double-ended, self-retaining retractor typically 8-10 inches (20-25 cm) in length. It features curved blades on both ends with a central handle for positioning and manipulation.",
    image: "/lovable-uploads/48979c37-dec0-4a3d-adf7-24850a63ddac.png"
  },
  {
    id: 16,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Malleable Retractor",
      "Deaver Retractor",
      "Army-Navy Retractor"
    ],
    correctAnswer: 1,
    explanation: "The malleable (ribbon) retractor is a flexible, flat retractor typically 8-12 inches (20-30 cm) in length and varying widths. Made from soft, pliable metal, it can be bent and shaped to conform to anatomical contours.",
    image: "/lovable-uploads/5f0977b2-6c33-42d3-b5a9-6d0eecf34acd.png"
  },
  {
    id: 17,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Harrington Retractor",
      "Deaver Retractor",
      "Kelly Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Deaver retractor is a large, curved retractor typically 10-13 inches (25-33 cm) in length with a broad, curved blade. It features a deep curve that allows for excellent retraction of large organs.",
    image: "/lovable-uploads/7fe5776f-8a3a-401c-bf59-ff98434738a6.png"
  },
  {
    id: 18,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Harrington Retractor",
      "Deaver Retractor",
      "Kelly Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Harrington retractor, also known as a sweetheart retractor, is a heart-shaped or kidney-shaped retractor typically 8-10 inches (20-25 cm) in length with smooth edges designed for gentle retraction.",
    image: "/lovable-uploads/1f62a02b-4a3b-44fa-bbb5-a3c9211e8247.png"
  },
  {
    id: 19,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Richardson-Eastman Retractor",
      "Deaver Retractor",
      "Harrington Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Richardson-Eastman retractor is a double-ended retractor typically 8-10 inches (20-25 cm) in length, featuring different sized curved blades on each end for versatility.",
    image: "/lovable-uploads/b75bffa1-261c-42e7-ab23-a8788c2a4d20.png"
  },
  {
    id: 20,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Harrington Retractor",
      "Deaver Retractor",
      "Kelly Retractor"
    ],
    correctAnswer: 3,
    explanation: "The Kelly retractor is a right-angled retractor typically 8-10 inches (20-25 cm) in length with a flat, rectangular blade positioned at a 90-degree angle to the handle.",
    image: "/lovable-uploads/3d80247c-83bc-4502-95d9-50ba6294a29a.png"
  },
  {
    id: 21,
    question: "Identify this surgical instrument:",
    choices: [
      "Babcock Forceps",
      "Allis Forceps",
      "Russian Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Allis forceps are traumatic tissue grasping instruments typically 6-10 inches (15-25 cm) in length. They feature distinctive serrated jaws with multiple interlocking teeth for secure grip on tough tissues.",
    image: "/lovable-uploads/59102488-835e-4f30-a32e-18ea83bfed82.png"
  },
  {
    id: 22,
    question: "Identify this surgical instrument:",
    choices: [
      "#3 Knife Handle",
      "#7 Knife Handle",
      "Beaver Blade Handle",
      "#4 Knife Handle"
    ],
    correctAnswer: 2,
    explanation: "The Beaver blade handle is a small, precision surgical handle typically 4-5 inches (10-13 cm) in length with a textured grip. It is specifically designed to hold Beaver blades for microsurgery and delicate procedures.",
    image: "/lovable-uploads/ae78fed8-55f9-4337-a4f4-d6d838565ed7.png"
  },
  {
    id: 23,
    question: "Identify this surgical instrument:",
    choices: [
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Senn Retractor",
      "Balfour Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Weitlaner retractor is a self-retaining retractor typically 4-6 inches (10-15 cm) in length, featuring multiple sharp prongs or teeth on curved arms with a ratcheting mechanism.",
    image: "/lovable-uploads/2faae81a-4910-4d0b-bbed-d15972a3ef8b.png"
  },
  {
    id: 24,
    question: "Identify this surgical instrument:",
    choices: [
      "Metzenbaum Scissors",
      "Mayo Scissors (Curved)",
      "Laney Goiter Scissors",
      "Lister Scissors"
    ],
    correctAnswer: 2,
    explanation: "Laney Goiter scissors are specialized curved surgical scissors typically 7-8 inches (18-20 cm) in length, designed specifically for thyroid surgery with fine tips for precise dissection.",
    image: "/lovable-uploads/9777fcf0-cf17-4ecf-8136-ee6629c859c8.png"
  },
  {
    id: 25,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Ferris-Smith Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "Ferris-Smith forceps are tissue grasping forceps typically 7-9 inches (18-23 cm) in length with distinctive serrated tips and cross-hatched serrations for secure tissue handling.",
    image: "/lovable-uploads/c9fd814d-bf3b-457e-9eed-63ac930c6a41.png"
  },
  {
    id: 26,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Ferris-Smith Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 3,
    explanation: "Russian forceps are heavy-duty tissue grasping forceps typically 6-10 inches (15-25 cm) in length, featuring broad, serrated jaws with multiple rows of interlocking teeth for secure handling of tough tissues.",
    image: "/lovable-uploads/6b600582-e817-467c-b860-0ffa00e0a29e.png"
  },
  {
    id: 27,
    question: "Identify this surgical instrument:",
    choices: [
      "Weitlaner Retractor",
      "Gelpi Retractor",
      "Senn Retractor",
      "Balfour Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Gelpi retractor is a self-retaining retractor typically 6-8 inches (15-20 cm) in length, featuring two curved arms with sharp hooks at the ends and a spring-loaded mechanism with central ratcheting.",
    image: "/lovable-uploads/4ffbeec3-3cdd-491b-8342-47c95a0f39ad.png"
  },
  {
    id: 28,
    question: "Identify this surgical instrument:",
    choices: [
      "Adson Tissue Forceps",
      "Rat Tooth Forceps",
      "DeBakey Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Rat Tooth forceps (Adson type) are precision tissue grasping forceps typically 4.75-5 inches (12-13 cm) in length, featuring fine tips with small interlocking teeth (typically 1×2 teeth configuration) for secure tissue grip.",
    image: "/lovable-uploads/4f06121f-1d9f-48a4-b5dc-415090ea8712.png"
  },
  {
    id: 29,
    question: "Identify this surgical instrument:",
    choices: [
      "Metzenbaum Scissors",
      "Mayo Scissors",
      "Lister Scissors",
      "Laney Goiter Scissors"
    ],
    correctAnswer: 2,
    explanation: "Lister scissors are specialized bandage scissors typically 5.5-7 inches (14-18 cm) in length, featuring one serrated blade and one smooth blade with a distinctive angled tip for safely removing bandages and dressings.",
    image: "/lovable-uploads/e276aef4-8215-41c0-a226-44412a31ebfd.png"
  },
  {
    id: 30,
    question: "Identify this surgical instrument:",
    choices: [
      "Yankauer Suction",
      "Poole Suction",
      "Frazier Suction",
      "Tonsil Suction"
    ],
    correctAnswer: 2,
    explanation: "The Frazier suction tip is a delicate, curved suction device typically 6-8 inches (15-20 cm) in length with a small diameter opening designed for precision suction in confined spaces and delicate surgeries.",
    image: "/lovable-uploads/c66b7240-e8fc-49b2-9c0c-42ea2fde68b8.png"
  },
  {
    id: 31,
    question: "Identify this surgical instrument:",
    choices: [
      "Crilewood Needle Driver",
      "Webster Needle Holder",
      "Mayo-Hegar Needle Holder",
      "Castroviejo Needle Holder"
    ],
    correctAnswer: 1,
    explanation: "Webster needle holders are delicate needle driving instruments typically 5-6 inches (13-15 cm) in length, featuring fine, crosshatched tungsten carbide inserts in the jaws for secure needle grip during precise suturing work.",
    image: "/lovable-uploads/2eb02db4-7cda-4821-a0b1-01d76b13d4ec.png"
  },
  {
    id: 32,
    question: "Identify this surgical instrument:",
    choices: [
      "Babcock Forceps",
      "Allis Forceps",
      "Tonsil Schmidt Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "Tonsil Schmidt forceps are specialized ENT instruments typically 7-8 inches (18-20 cm) in length, designed specifically for tonsillectomy procedures with curved, serrated jaws for secure tissue handling.",
    image: "/lovable-uploads/f7f2cf01-808e-4209-a70c-9d2a068b847d.png"
  },
  {
    id: 33,
    question: "Identify this surgical instrument:",
    choices: [
      "Senn Retractor",
      "Goelet Retractor",
      "Army-Navy Retractor",
      "Rake Retractor"
    ],
    correctAnswer: 1,
    explanation: "Goelet retractors are hand-held surgical instruments typically 6-7 inches (15-18 cm) in length, featuring a curved, spoon-shaped blade at each end with different sizes for versatility in soft tissue retraction.",
    image: "/lovable-uploads/1a87ae38-8d0a-4bb0-a036-58b296d78feb.png"
  },
  {
    id: 34,
    question: "Identify this surgical instrument:",
    choices: [
      "Army-Navy Retractor",
      "Senn Retractor",
      "Goelet Retractor",
      "Rake Retractor"
    ],
    correctAnswer: 1,
    explanation: "Senn retractors are double-ended hand-held instruments typically 6.5 inches (16.5 cm) in length, featuring a three-pronged rake end and a U-shaped blunt end for versatile tissue retraction.",
    image: "/lovable-uploads/senn-retractor.jpeg"
  },
  {
    id: 35,
    question: "Identify this surgical instrument:",
    choices: [
      "Senn Retractor",
      "Army-Navy Retractor",
      "Goelet Retractor",
      "Rake Retractor"
    ],
    correctAnswer: 1,
    explanation: "Army-Navy retractors are handheld surgical instruments typically 8-9 inches (20-23 cm) in length, featuring right-angled blade ends of different sizes for versatile tissue retraction and excellent wound exposure.",
    image: "/lovable-uploads/army-navy-retractor.jpeg"
  },
  {
    id: 36,
    question: "Identify this surgical instrument:",
    choices: [
      "Adson Tissue Forceps",
      "Rat Tooth Forceps",
      "DeBakey Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "DeBakey forceps are specialized atraumatic tissue forceps typically 6-12 inches (15-30 cm) in length, featuring longitudinal serrations or ridges on the inner surface that provide excellent grip without causing tissue trauma.",
    image: "/lovable-uploads/debakey-forceps.jpeg"
  },
  {
    id: 37,
    question: "Identify this surgical instrument:",
    choices: [
      "Rat Tooth Forceps",
      "Adson Tissue Forceps",
      "DeBakey Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Adson tissue forceps are fine surgical instruments typically 4.75 inches (12 cm) in length, featuring delicate tips with either teeth (1x2 teeth configuration) or smooth surfaces for precise tissue handling.",
    image: "/lovable-uploads/adson-tissue-forceps.jpeg"
  },
  {
    id: 38,
    question: "Identify this surgical instrument:",
    choices: [
      "Frazier Suction",
      "Yankauer Suction",
      "Poole Suction",
      "Tonsillar Suction"
    ],
    correctAnswer: 1,
    explanation: "Yankauer suction tips are rigid surgical suction devices typically 10-12 inches (25-30 cm) in length, featuring a curved, angled tip with multiple holes for effective fluid and debris removal from the operative field.",
    image: "/lovable-uploads/yankauer-suction.png"
  },
  {
    id: 39,
    question: "Identify this surgical instrument:",
    choices: [
      "Kocher Clamp",
      "Doyen Intestinal Clamp",
      "Allis Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Doyen intestinal clamp is a large, curved surgical clamp typically 8-10 inches (20-25 cm) in length, designed specifically for clamping bowel with broad, atraumatic jaws that prevent tissue damage.",
    image: "/lovable-uploads/doyen-intestinal-clamp.png"
  },
  {
    id: 40,
    question: "Identify this surgical instrument:",
    choices: [
      "Probe",
      "Groove Director",
      "Lacrimal Probe",
      "Nerve Hook"
    ],
    correctAnswer: 1,
    explanation: "The groove director is a specialized surgical instrument typically 6-8 inches (15-20 cm) in length, featuring a forked or split end with a central groove designed to guide cutting instruments for precise incisions.",
    image: "/lovable-uploads/groove-director.png"
  },
  {
    id: 41,
    question: "Identify this surgical instrument:",
    choices: [
      "Senn Retractor",
      "Rake Retractor",
      "Army-Navy Retractor",
      "Goelet Retractor"
    ],
    correctAnswer: 1,
    explanation: "A rake retractor is a multi-pronged retractor featuring multiple sharp prongs (typically 3-6) that provide secure tissue grip and excellent exposure of underlying structures during various surgical procedures.",
    image: "/lovable-uploads/rake-retractor.png"
  },
  {
    id: 42,
    question: "Identify this surgical instrument and its compatible blade sizes:",
    choices: [
      "#3 Knife Handle",
      "#7 Knife Handle",
      "#4 Knife Handle",
      "Beaver Blade Handle"
    ],
    correctAnswer: 1,
    explanation: "The #7 knife handle is a large surgical scalpel handle approximately 6 inches (15 cm) in length. This handle is compatible with larger blade sizes including #20, #21, #22, #23, and #24 for major surgical procedures.",
    image: "/lovable-uploads/knife-handle-7.png"
  },
  {
    id: 43,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Kelly Clamp",
      "Rochester Pean",
      "Halstead Mosquito"
    ],
    correctAnswer: 1,
    explanation: "The Kelly clamp is a curved hemostat typically 5.5-6.25 inches (14-16 cm) in length, featuring distinctive half serrations on the jaws for secure clamping of blood vessels while minimizing tissue trauma.",
    image: "/lovable-uploads/kelly-clamp.png"
  },
  {
    id: 44,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Hasson S-Shaped Retractor",
      "Goelet Retractor",
      "Army-Navy Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Hasson S-shaped retractor is a specialized hand-held retractor featuring a distinctive S-curve design that provides superior tissue retraction capabilities and is particularly useful in laparoscopic procedures.",
    image: "/lovable-uploads/hasson-s-shaped-retractor.png"
  },
  {
    id: 45,
    question: "Identify this surgical instrument:",
    choices: [
      "Balfour Retractor",
      "Bookwalter Retractor",
      "O'Sullivan O'Connor Retractor",
      "Weitlaner Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Bookwalter retractor is a sophisticated self-retaining retractor system consisting of a central ring that attaches to the operating table with multiple interchangeable retractor blades for 360-degree retraction capability.",
    image: "/lovable-uploads/bookwalter-retractor.png"
  },
  {
    id: 46,
    question: "Identify this surgical instrument:",
    choices: [
      "Bookwalter Retractor",
      "Balfour Retractor",
      "O'Sullivan O'Connor Retractor",
      "Gelpi Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Balfour retractor is a self-retaining retractor specifically designed for abdominal surgeries, featuring a central frame with adjustable lateral blades for optimal exposure during prolonged procedures.",
    image: "/lovable-uploads/balfour-retractor.png"
  },
  {
    id: 47,
    question: "Identify this surgical instrument:",
    choices: [
      "Balfour Retractor",
      "Bookwalter Retractor",
      "O'Sullivan O'Connor Retractor",
      "Weitlaner Retractor"
    ],
    correctAnswer: 2,
    explanation: "The O'Sullivan O'Connor retractor is a specialized self-retaining retractor system designed primarily for gynecological and lower abdominal surgeries, featuring a circular or oval ring configuration with multiple adjustable blade attachments.",
    image: "/lovable-uploads/osullivan-oconnor-retractor.png"
  },
  {
    id: 48,
    question: "Identify this surgical instrument:",
    choices: [
      "Webster Needle Holder",
      "Crilewood Needle Driver",
      "Mayo-Hegar Needle Holder",
      "Castroviejo Needle Holder"
    ],
    correctAnswer: 1,
    explanation: "The Crilewood needle driver is a precision needle holder featuring tungsten carbide inserts in the jaws for superior grip and durability, typically 6-8 inches (15-20 cm) in length with gold-colored finger rings for identification.",
    image: "/lovable-uploads/crilewood-needle-driver.png"
  }
];