import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { SectionWrapper } from "@/components/atoms/SectionWrapper";
import { aboutData } from "@/data/about";
import { motion } from "framer-motion";
import { brandConfig } from "@/config/brand.config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <>
      <head>
        <title>Tentang {brandConfig.name}</title>
        <meta name="description" content={aboutData.description} />
      </head>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <SectionWrapper className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            {aboutData.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            {aboutData.description}
          </motion.p>
        </SectionWrapper>

        {/* Why USAHAin */}
        <SectionWrapper className="bg-muted/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              {aboutData.story.title}
            </h2>
            {aboutData.story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-text-secondary leading-relaxed mb-4 last:mb-0"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {aboutData.vision.title}
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {aboutData.vision.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {aboutData.mission.title}
              </h2>
              <ul className="space-y-3">
                {aboutData.mission.items.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper className="bg-muted/50">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            {aboutData.values.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {aboutData.values.items.map((v, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-text-secondary">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Team */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-3">
              {aboutData.team.title}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              {aboutData.team.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aboutData.team.members.map((member, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-text-secondary">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default About;
