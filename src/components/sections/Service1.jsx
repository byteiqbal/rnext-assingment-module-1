import Service1Content from "../contents/Service1Content";
// content section
const ServiceContent = {
  contentItem1: {
    heading: "Work with tools you already use",
    content1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    content2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    listContent: [
      { id: 1, text: "Continuous integration and deployment" },
      { id: 2, text: "Development workflow" },
      { id: 3, text: "Knowledge management" },
    ],
  },
  contentItem2: {
    heading: "We invest in the world’s potential",
    content1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    content2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    listContent: [
      { id: 1, text: "Dynamic reports and dashboards" },
      { id: 2, text: "Templates for everyone" },
      { id: 3, text: "Development workflow" },
      { id: 3, text: "Limitless business automation" },
      { id: 3, text: "Knowledge management" },
    ],
  },
};

// Components
export default function Service1() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Service1Content
            heading={ServiceContent.contentItem1.heading}
            content1={ServiceContent.contentItem1.content1}
            list={ServiceContent.contentItem1.listContent}
            content2={ServiceContent.contentItem1.content2}
          />
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-1.png"
            alt="dashboard feature image"
          />
        </div>

        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-2.png"
            alt="feature image 2"
          />
          <Service1Content
            heading={ServiceContent.contentItem2.heading}
            content1={ServiceContent.contentItem2.content1}
            list={ServiceContent.contentItem2.listContent}
            content2={ServiceContent.contentItem2.content2}
          />
        </div>
      </div>
    </section>
  );
}
