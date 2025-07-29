export const bioDesc = [
  {
    text:
      "Developed as part of my capstone project at UW–Madison, BioInformatics is a universal " +
      "metabolite database that enables researchers to explore, redesign, and analyze metabolic " +
      "pathways across multiple organisms.",
  },
  {
    text:
      "The platform integrates data from 20 BiGG genome-scale models: 14,000 metabolites, " +
      "25,000 reactions, 10,000 genes, and 8,000 compounds.  These models were cleaned and " +
      "transformed from JSON into a MySQL schema using Python and Java tools.",
  },
  {
    bullets: {
      title: "Key Functionalities:",
      items: [
        "Built in search pages for genes, reactions, and metabolites to allow users to " +
          "easily navigate complex data",
        "Dynamic pathway discovery combines Breadth-First Search with MySQL queries to " +
          "trace pathways between metabolites, addressing the challenge of navigating cyclic " +
          "metabolic networks",
        "Registered users can post comments on specific entries, fostering collaboration and " +
          "knowledge sharing",
        "Admin accounts support the creation, updating, and deletion of genes, reactions, " +
          "and metabolites via a secure login portal",
        "User authentication using session-based login and role-based access control " +
          "for protected modification endpoints",
      ],
    },
  },

  // Add more with different image paths
];

export const bioImages = [
  {
    image: "pics/bio-image-1.png",
  },
  {
    image: "pics/bio-image-2.png",
  },
  {
    image: "pics/bio-image-3.png",
  },
  {
    image: "pics/bio-image-4.png",
  },
  {
    image: "pics/bio-image-5.png",
  },
  {
    image: "pics/bio-image-6.png",
  },
];

//
export const bioImageIds: string[] = bioImages.map(
  (_, index) => `#bio-image-${index + 1}`,
);
