import { Link } from "react-router-dom";

export default function Training() {
  const trainingModules = [
    {
      title: "Change Management",
      image: "/Assets/training/time4change.jpg",
      content:
        "For organizations to survive and achieve goals in the current environment change is no longer optional. Organizations have to learn to love a chance to stay ahead of the competition. An organization is a multifaceted entity and bringing about a change is equally a complex ordeal. The change process is fragile which requires a specialist. This course provides delegates with the proven change management tools and techniques needed to effectively plan and lead change in the workplace and also implementing change in a way of achieving desired objectives.",
      position: "left",
    },
    {
      title: "Conflict Management",
      image: "/Assets/training/conflictmanagement.jpg",
      content:
        "The capacity of leaders to manage internal and external conflicts is a key skill which requires specific conflict management training. Effective conflict management training delivers skills applicable to many situations, ranging from people management to organizational issues and communication in the business environment. Our Conflict management training program provides skills needed to deal with conflicts within an organization, between individuals, groups, team members or departments.",
      position: "right",
    },
    {
      title: "Career Management",
      image: "/Assets/training/career management.jpg",
      content:
        "The changing nature of work and the workplace environment are as real as searching for the job in itself and this requires a skilled, knowledgeable workforce with employees who are adaptive, flexible, and focused on the future. This module among others will assist the participants to improve their skills, take on new responsibilities, learn new skills to advance their career, and leverage their strengths more fully in their job and organization.",
      bulletPoints: [
        "Improve the skills and knowledge to raise job performance level",
        "Take on new responsibilities and enrich their current job",
        "Learn new skills and knowledge to advance their career",
        "Leverage strengths more fully in their job and in the organization",
      ],
      position: "left",
    },
  ];

  const softSkills = [
    {
      column1: [
        "Communication skills",
        "Presentation skills",
        "Problem-solving skills",
        "Interpersonal skills",
        "Creativity skills",
      ],
      column2: [
        "Emotional Intelligence",
        "Time management",
        "Work Ethics",
        "Smart teams",
        "Adaptability",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-40 bg-gradient-to-b from-primary/10 to-surface">
        <div className="text-center mb-8">
          <h1 className="font-headline text-5xl lg:text-6xl font-black text-on-surface mb-6">
            Training Services
          </h1>
          <div className="h-1.5 w-24 bg-primary rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-6 lg:px-40 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">
            Our Training Services
          </h2>
          <p className="text-on-surface-variant text-lg">
            As a people management company, our training programs are targeted
            towards skills and productivity both for organization and employees.
          </p>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-16 px-6 lg:px-40 bg-surface">
        <div className="max-w-6xl mx-auto space-y-16">
          {trainingModules.map((module, idx) => (
            <div key={idx}>
              <h3 className="font-headline text-3xl font-bold text-primary mb-8">
                {module.title}
              </h3>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${module.position === "right" ? "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1" : ""}`}
              >
                {/* Image */}
                <div className="lg:col-span-5">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-auto rounded-xl shadow-lg editorial-shadow"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                    {module.content}
                  </p>

                  {module.bulletPoints && (
                    <ul className="space-y-4">
                      {module.bulletPoints.map((point, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="text-primary flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined">
                              check_circle
                            </span>
                          </span>
                          <span className="text-on-surface-variant">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 px-6 lg:px-40 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-headline text-3xl font-bold text-primary mb-12">
            Other Soft Skills Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
              <ul className="space-y-4">
                {softSkills[0].column1.map((skill, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-primary flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </span>
                    <span className="text-on-surface-variant font-label">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow">
              <ul className="space-y-4">
                {softSkills[0].column2.map((skill, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-primary flex-shrink-0 mt-1">
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </span>
                    <span className="text-on-surface-variant font-label">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-40 bg-gradient-to-r from-primary/90 to-primary-fixed">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-on-primary mb-6">
            Ready to Develop Your Team?
          </h2>
          <p className="text-on-primary/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert training programs are designed to enhance skills and
            boost productivity.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-on-primary text-primary font-label px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
