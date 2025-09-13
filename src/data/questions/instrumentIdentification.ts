export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const instrumentIdentificationQuestions: Question[] = [
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
      "Halstead Mosquito",
      "Curved Crile"
    ],
    correctAnswer: 1,
    explanation: "The Backhaus Towel Clamp is a perforating clamp typically 5.5 inches (14 cm) in length. It features sharp pointed tips that penetrate through surgical drapes and towels to secure them firmly.",
    image: "/lovable-uploads/be72b641-6e4b-4440-a858-a90063df4c16.png"
  },
  {
    id: 3,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Halstead Mosquito",
      "Mixter Right Angle",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "The Halstead Mosquito is a small hemostat typically 5 inches (12.5 cm) in length. It features fine, delicate jaws with transverse serrations for clamping small blood vessels.",
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
    explanation: "The Foerster Sponge Stick is a long surgical instrument typically 9.5-10 inches (24-25 cm) in length. It features ring handles and serrated jaws designed to securely hold gauze sponges.",
    image: "/lovable-uploads/cc624773-e623-4e92-81d6-fe57f75a53b3.png"
  },
  {
    id: 5,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Halstead Mosquito",
      "Mixter Right Angle",
      "Kocher Clamp"
    ],
    correctAnswer: 2,
    explanation: "The Mixter Right Angle hemostat is a curved surgical clamp typically 7-9 inches (18-23 cm) in length. It features a distinctive right-angle curve near the tip with serrated jaws.",
    image: "/lovable-uploads/4379375d-6a06-4540-84a6-7eb77dd41537.png"
  },
  {
    id: 6,
    question: "Identify this surgical instrument:",
    choices: [
      "Halstead Mosquito",
      "Curved Crile",
      "Mixter Right Angle",
      "Straight Crile"
    ],
    correctAnswer: 1,
    explanation: "The Curved Crile hemostat is a medium-sized surgical clamp typically 5.5-6.25 inches (14-16 cm) in length. It features a curved tip with transverse serrations.",
    image: "/lovable-uploads/428c99f3-12db-4068-a414-4df52acb2740.png"
  },
  {
    id: 7,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Russian Forceps",
      "Kocher Clamp",
      "Babcock Forceps"
    ],
    correctAnswer: 2,
    explanation: "The Kocher clamp is a heavy-duty surgical instrument available in both straight and curved versions, typically 6-8 inches (15-20 cm) in length. It features distinctive 1×2 teeth at the tip.",
    image: "/lovable-uploads/b83510c2-04ba-4fd2-8e9c-10039f51486d.png"
  },
  {
    id: 8,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Scissors (Straight)",
      "Metzenbaum Scissors",
      "Mayo Scissors (Curved)",
      "Laney Goiter Scissors"
    ],
    correctAnswer: 1,
    explanation: "Metzenbaum scissors are delicate surgical scissors typically 5-7 inches (13-18 cm) in length with long, slender blades and blunt tips. The curved variety is particularly useful for dissecting around organs.",
    image: "/lovable-uploads/924ee28a-8970-454a-8351-e938e48d12b7.png"
  },
  {
    id: 9,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Scissors (Straight)",
      "Metzenbaum Scissors",
      "Mayo Scissors (Curved)",
      "Laney Goiter Scissors"
    ],
    correctAnswer: 0,
    explanation: "Mayo scissors are heavy-duty surgical scissors typically 6-7 inches (15-18 cm) in length with thick, sturdy blades and blunt tips. The straight variety is useful for cutting at surface level.",
    image: "/lovable-uploads/e74a51fe-906e-480f-b992-c22b64e35da7.png"
  },
  {
    id: 10,
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
    id: 11,
    question: "Identify this surgical instrument:",
    choices: [
      "#4 Knife Handle",
      "#3 Knife Handle",
      "#7 Knife Handle",
      "Beaver Blade Handle"
    ],
    correctAnswer: 1,
    explanation: "The #3 knife handle is a standard surgical scalpel handle approximately 5 inches (13 cm) in length. This handle is compatible with blade sizes #10, #11, #12, #13, and #15.",
    image: "/lovable-uploads/a65b6129-9f75-4b8c-bfdb-26cc77272439.png"
  },
  {
    id: 12,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Russian Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Babcock forceps are atraumatic tissue grasping instruments typically 6-9 inches (15-23 cm) in length. They feature distinctive fenestrated (windowed) jaws with smooth inner surfaces.",
    image: "/lovable-uploads/d1427bc2-7fa6-4486-bafd-3371c3c1debf.png"
  },
  {
    id: 13,
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
    id: 14,
    question: "Identify this surgical instrument:",
    choices: [
      "Deaver Retractor",
      "Richardson Retractor",
      "Harrington Retractor", 
      "Kelly Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Richardson retractor is a double-ended, self-retaining retractor typically 8-10 inches (20-25 cm) in length. It features curved blades on both ends with a central handle.",
    image: "/lovable-uploads/48979c37-dec0-4a3d-adf7-24850a63ddac.png"
  },
  {
    id: 15,
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
    id: 16,
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
    id: 17,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Harrington Retractor",
      "Deaver Retractor",
      "Kelly Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Harrington retractor, also known as a sweetheart retractor, is a heart-shaped or kidney-shaped retractor typically 8-10 inches (20-25 cm) in length.",
    image: "/lovable-uploads/1f62a02b-4a3b-44fa-bbb5-a3c9211e8247.png"
  },
  {
    id: 18,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Richardson-Eastman Retractor",
      "Deaver Retractor",
      "Harrington Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Richardson-Eastman retractor is a double-ended retractor typically 8-10 inches (20-25 cm) in length, featuring different sized curved blades on each end.",
    image: "/lovable-uploads/b75bffa1-261c-42e7-ab23-a8788c2a4d20.png"
  },
  {
    id: 19,
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
    id: 20,
    question: "Identify this surgical instrument:",
    choices: [
      "Babcock Forceps",
      "Allis Forceps",
      "Russian Forceps",
      "Ferris-Smith Forceps"
    ],
    correctAnswer: 1,
    explanation: "Allis forceps are traumatic tissue grasping instruments typically 6-10 inches (15-25 cm) in length. They feature distinctive serrated jaws with multiple interlocking teeth.",
    image: "/lovable-uploads/59102488-835e-4f30-a32e-18ea83bfed82.png"
  },
  {
    id: 21,
    question: "Identify this surgical instrument:",
    choices: [
      "#3 Knife Handle",
      "#4 Knife Handle",
      "Beaver Blade Handle",
      "#7 Knife Handle"
    ],
    correctAnswer: 2,
    explanation: "The Beaver blade handle is a small, precision surgical handle typically 4-5 inches (10-13 cm) in length with a textured grip. It is specifically designed to hold Beaver blades for microsurgery.",
    image: "/lovable-uploads/ae78fed8-55f9-4337-a4f4-d6d838565ed7.png"
  },
  {
    id: 22,
    question: "Identify this surgical instrument:",
    choices: [
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Finochietto Retractor",
      "Balfour Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Weitlaner retractor is a self-retaining retractor typically 4-6 inches (10-15 cm) in length, featuring multiple sharp prongs or teeth on curved arms with a ratcheting mechanism.",
    image: "/lovable-uploads/2faae81a-4910-4d0b-bbed-d15972a3ef8b.png"
  },
  {
    id: 23,
    question: "Identify this surgical instrument:",
    choices: [
      "Metzenbaum Scissors",
      "Mayo Scissors",
      "Laney Goiter Scissors",
      "Iris Scissors"
    ],
    correctAnswer: 2,
    explanation: "Laney Goiter scissors are specialized curved surgical scissors typically 7-8 inches (18-20 cm) in length, designed specifically for thyroid surgery.",
    image: "/lovable-uploads/9777fcf0-cf17-4ecf-8136-ee6629c859c8.png"
  },
  {
    id: 24,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Babcock Forceps",
      "Ferris-Smith Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "Ferris-Smith forceps are tissue grasping forceps typically 7-9 inches (18-23 cm) in length with distinctive serrated tips for secure tissue handling.",
    image: "/lovable-uploads/c9fd814d-bf3b-457e-9eed-63ac930c6a41.png"
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
    correctAnswer: 3,
    explanation: "Russian forceps are heavy-duty tissue grasping forceps typically 6-10 inches (15-25 cm) in length, featuring broad, serrated jaws with multiple rows of interlocking teeth.",
    image: "/lovable-uploads/6b600582-e817-467c-b860-0ffa00e0a29e.png"
  },
  {
    id: 26,
    question: "Identify this surgical instrument:",
    choices: [
      "Weitlaner Retractor",
      "Gelpi Retractor",
      "Finochietto Retractor",
      "Balfour Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Gelpi retractor is a self-retaining retractor typically 6-8 inches (15-20 cm) in length, featuring two curved arms with sharp hooks at the ends and a spring-loaded mechanism.",
    image: "/lovable-uploads/4ffbeec3-3cdd-491b-8342-47c95a0f39ad.png"
  },
  {
    id: 27,
    question: "Identify this surgical instrument:",
    choices: [
      "Babcock Forceps",
      "DeBakey Forceps",
      "Rat Tooth Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 2,
    explanation: "Rat Tooth Forceps (Adson Forceps) are fine tissue forceps typically 4.75 inches (12 cm) in length with a single tooth on one tip and a corresponding notch on the other.",
    image: "/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png"
  },
  {
    id: 28,
    question: "Identify this surgical instrument:",
    choices: [
      "Rat Tooth Forceps",
      "DeBakey Forceps",
      "Tissue Forceps (Plain)",
      "Gerald Forceps"
    ],
    correctAnswer: 1,
    explanation: "DeBakey forceps are atraumatic vascular forceps typically 6-8 inches (15-20 cm) in length, featuring longitudinal serrations designed for gentle handling of delicate tissues and blood vessels.",
    image: "/lovable-uploads/96b445f5-b5c5-46b6-af48-c19a6184e9e4.png"
  },
  {
    id: 29,
    question: "Identify this surgical instrument:",
    choices: [
      "Rat Tooth Forceps",
      "DeBakey Forceps",
      "Tissue Forceps (Plain)",
      "Adson-Brown Forceps"
    ],
    correctAnswer: 2,
    explanation: "Tissue Forceps (Plain) are smooth-tipped forceps typically 5-6 inches (13-15 cm) in length with no teeth or serrations, designed for gentle tissue handling without trauma.",
    image: "/lovable-uploads/a97d37e9-2975-4012-992a-008ee35274c1.png"
  },
  {
    id: 30,
    question: "Identify this surgical instrument:",
    choices: [
      "Army-Navy Retractor",
      "Senn Retractor",
      "Volkmann Retractor",
      "Ribbon Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Army-Navy retractor is a double-ended handheld retractor typically 8 inches (20 cm) in length, featuring different sized blades on each end for versatile tissue retraction.",
    image: "/lovable-uploads/251e6ade-3869-488e-96bb-ec2086e82e69.png"
  },
  {
    id: 31,
    question: "Identify this surgical instrument:",
    choices: [
      "Army-Navy Retractor",
      "Senn Retractor",
      "Volkmann Retractor",
      "Love-Adson Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Senn retractor is a double-ended handheld retractor typically 6.5 inches (16.5 cm) in length, with one blunt end and one end with multiple sharp prongs.",
    image: "/lovable-uploads/f9837b3c-b7c4-452d-ace3-b7bb538a4bb3.png"
  },
  {
    id: 32,
    question: "Identify this surgical instrument:",
    choices: [
      "Senn Retractor",
      "Volkmann Retractor",
      "Army-Navy Retractor",
      "Hibbs Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Volkmann retractor is a handheld retractor typically 8-10 inches (20-25 cm) in length, featuring multiple sharp curved prongs designed for retracting muscle and deep tissues.",
    image: "/lovable-uploads/e276aef4-8215-41c0-a226-44412a31ebfd.png"
  },
  {
    id: 33,
    question: "Identify this surgical instrument:",
    choices: [
      "Yankauer Suction",
      "Poole Suction",
      "Frazier Suction",
      "Andrews Suction"
    ],
    correctAnswer: 0,
    explanation: "The Yankauer suction tip is a rigid suction device typically 10-12 inches (25-30 cm) in length with a curved tip and side opening, commonly used for suctioning oral secretions and large debris.",
    image: "/lovable-uploads/c46ab3be-13fe-4691-8a96-99626ea686f1.png"
  },
  {
    id: 34,
    question: "Identify this surgical instrument:",
    choices: [
      "Yankauer Suction",
      "Poole Suction", 
      "Frazier Suction",
      "Tonsillar Suction"
    ],
    correctAnswer: 2,
    explanation: "The Frazier suction tip is a small, delicate suction device typically 6-8 inches (15-20 cm) in length with a fine tip, designed for precise suctioning in neurosurgery and microsurgery.",
    image: "/lovable-uploads/2eb02db4-7cda-4821-a0b1-01d76b13d4ec.png"
  },
  {
    id: 35,
    question: "Identify this surgical instrument:",
    choices: [
      "Penfield Dissector",
      "Freer Elevator",
      "Cottle Elevator",
      "Joseph Elevator"
    ],
    correctAnswer: 0,
    explanation: "The Penfield dissector is a neurosurgical instrument typically 7 inches (18 cm) in length with a blunt, rounded tip designed for gentle tissue dissection and manipulation in neurosurgery.",
    image: "/lovable-uploads/3cb96223-53f0-4e4c-8bed-2be9daa426a8.png"
  },
  {
    id: 36,
    question: "Identify this surgical instrument:",
    choices: [
      "Adson Forceps",
      "Gerald Forceps",
      "Cushing Forceps",
      "Bayonet Forceps"
    ],
    correctAnswer: 1,
    explanation: "Gerald forceps are fine tissue forceps typically 7 inches (18 cm) in length with delicate teeth, commonly used in plastic surgery and microsurgery for precise tissue handling.",
    image: "/lovable-uploads/f2fb6d13-d957-4788-8263-4f172ee8646b.png"
  },
  {
    id: 38,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Crile",
      "Kelly Clamp",
      "Kocher Clamp",
      "Rochester Pean"
    ],
    correctAnswer: 1,
    explanation: "Kelly clamps are curved hemostatic clamps typically 5.5-6.25 inches (14-16 cm) in length. They feature half serrations on the jaws and are commonly used for clamping blood vessels and tissue. The half serrations provide a secure grip while reducing tissue trauma compared to fully serrated instruments.",
    image: "/lovable-uploads/kelly-clamp.png"
  },
  {
    id: 39,
    question: "Identify this surgical instrument:",
    choices: [
      "Allis Forceps",
      "Singley Forceps",
      "Russian Forceps",
      "DeBakey Forceps"
    ],
    correctAnswer: 1,
    explanation: "Singley forceps are delicate tissue forceps typically 6-8 inches (15-20 cm) in length with long, slender jaws and smooth tips. These forceps are designed for precise handling of delicate tissues without causing trauma and are commonly used in plastic surgery and microsurgery.",
    image: "/lovable-uploads/singley-forceps.png"
  },
  {
    id: 40,
    question: "Identify this surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Parker Retractor",
      "Army-Navy Retractor",
      "Senn Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Parker retractor is a simple, curved hand-held retractor typically 6-8 inches (15-20 cm) in length with smooth, rounded ends. The gentle curve allows for effective tissue retraction while minimizing trauma to delicate structures.",
    image: "/lovable-uploads/parker-retractor.png"
  },
  {
    id: 41,
    question: "Identify this surgical instrument:",
    choices: [
      "S-Shaped Retractor",
      "Hasson S-Shaped Retractor",
      "Curved Richardson",
      "Parker Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Hasson S-shaped retractor is a specialized hand-held retractor featuring a distinctive S-curve design that provides superior tissue retraction capabilities. Named after Dr. Harrith Hasson, these retractors are particularly useful in laparoscopic and minimally invasive procedures.",
    image: "/lovable-uploads/hasson-s-shaped-retractor.png"
  },
  {
    id: 42,
    question: "Identify this surgical instrument system:",
    choices: [
      "Balfour Retractor",
      "Bookwalter Retractor",
      "O'Sullivan O'Connor Retractor",
      "Finochietto Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Bookwalter retractor is a sophisticated self-retaining retractor system designed for major abdominal and thoracic surgeries. This system consists of a central ring that attaches to the operating table and multiple interchangeable retractor blades that can be positioned at various angles and depths.",
    image: "/lovable-uploads/bookwalter-retractor.png"
  },
  {
    id: 43,
    question: "Identify this surgical instrument:",
    choices: [
      "Weitlaner Retractor",
      "Balfour Retractor",
      "Gelpi Retractor",
      "Bookwalter Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Balfour retractor is a self-retaining retractor specifically designed for abdominal surgeries. It features a central frame with adjustable lateral blades that can be positioned to provide optimal exposure of the operative field and is essential for procedures requiring prolonged abdominal exposure.",
    image: "/lovable-uploads/balfour-retractor.png"
  },
  {
    id: 44,
    question: "Identify this surgical instrument:",
    choices: [
      "Balfour Retractor",
      "Bookwalter Retractor",
      "O'Sullivan O'Connor Retractor",
      "Weitlaner Retractor"
    ],
    correctAnswer: 2,
    explanation: "The O'Sullivan O'Connor retractor is a specialized self-retaining retractor system designed primarily for gynecological and lower abdominal surgeries. This retractor features a circular or oval ring configuration with multiple adjustable blade attachments that provide circumferential retraction.",
    image: "/lovable-uploads/osullivan-oconnor-retractor.png"
  },
  {
    id: 45,
    question: "Identify this surgical instrument:",
    choices: [
      "Mayo Hegar Needle Driver",
      "Crilewood Needle Driver",
      "Webster Needle Driver",
      "Mathieu Needle Driver"
    ],
    correctAnswer: 1,
    explanation: "The Crilewood needle driver is a precision needle holder featuring tungsten carbide inserts in the jaws for superior grip and durability. These instruments are typically 6-8 inches (15-20 cm) in length with gold-colored finger rings for easy identification and provide excellent needle control during suturing.",
    image: "/lovable-uploads/crilewood-needle-driver.png"
  }
];