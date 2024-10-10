import { BentoCard } from "@/components/landing/bento-card";
import { Button } from "@/components/landing/button";
import { Container } from "@/components/landing/container";
import { Footer } from "@/components/landing/footer";
import { Gradient } from "@/components/landing/gradient";
import { Keyboard } from "@/components/landing/keyboard";
import { Link } from "@/components/landing/link";
import { LinkedAvatars } from "@/components/landing/linked-avatars";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { LogoCluster } from "@/components/landing/logo-cluster";
import { LogoTimeline } from "@/components/landing/logo-timeline";
import { Map } from "@/components/landing/map";
import { Navbar } from "@/components/landing/navbar";
import { Screenshot } from "@/components/landing/screenshot";
import { Testimonials } from "@/components/landing/testimonials";
import { Heading, Subheading } from "@/components/landing/text";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Spline from "@splinetool/react-spline/next";

export const metadata: Metadata = {
  description:
    "Kinetic helps you work faster by providing efficient project management tools.",
};

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-38 md:pt-24 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="font-display font-bold text-balance text-6xl/[0.9]  tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-7xl">
              Superpowered projects.
            </h1>
            <p className="mt-10 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Kinetic is an end-to-end project management tool designed to get
              things done fast.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/example-project-000001/dashboard">
                View Demo
              </Button>
              <Button variant="secondary" href="/pricing">
                See pricing
              </Button>
            </div>
          </div>
          <div className="w-[400px] h-[500px] ">
            <Spline scene="https://prod.spline.design/LnZkgOqm0JkCEdqS/scene.splinecode" />{" "}
            {/* <Spline scene="https://prod.spline.design/oj7MoYgz6pkZRcXa/scene.splinecode" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

// 1824 x 1152
// 2280 x 1440

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Visualize the flow of your entire project.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="./screenshots/Flow_light.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  );
}

function KanbanFeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Seamlessly track your project's status.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="./screenshots/Kanban_light.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  );
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Tasks</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Tools to make task management feel like second nature.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Overview"
          title="Gain Full Project Clarity"
          description="Kinetic gives you a comprehensive view of your projects, allowing you to manage resourcing, scheduling, budgets, and more—all in one place."
          graphic={
            <div className="h-80 bg-[url(/screenshots/Overview_light.png)] bg-[size:1000px_560px] bg-[left_0px_top_0px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Tasks"
          title="Streamline Task Management"
          description="Organize and prioritize tasks effortlessly with Kinetic’s intuitive task management tools. Assign tasks, track progress, and collaborate with your team all in real-time."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/Task_light.png)] bg-[size:1000px_560px] bg-[left_0px_top_-60px] bg-no-repeat" />
          }
          fade={["bottom"]}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Efficiency"
          title="Boost Team Productivity"
          description="Maximize efficiency with custom workflows and keyboard shortcuts, designed for teams that thrive on speed and precision."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={["LeftCommand", "LeftShift", "D"]} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Collaboration"
          title="Streamline communication"
          description="Enhance collaboration with built-in messaging and document sharing, ensuring that your team can always stay connected and informed."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Expand Without Limits"
          description="As your projects grow, so does Kinetic. Scale up effortlessly and manage even the most complex projects with confidence."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  );
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl py-32 bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-700">
      <Container>
        <Subheading dark>Team Management</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Help your team move faster.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Team Management"
            title=""
            description="Easily manage your team’s progress with real-time insights and task management tools to keep everyone aligned and productive."
            graphic={
              <div className="h-80 bg-[url(/screenshots/Team_dark.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={["top"]}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Effortlessly Integrated Tools"
            description="Seamlessly connect Kinetic with dozens of tools and platforms, so your team can work in sync with the tools they love."
            graphic={<LogoTimeline />}
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Discussions"
            title="Task Specific Chats & Calls"
            description="Keep your team connected with task-specific chat, ensuring clear communication and quick decisions."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Migration"
            title="Effortlessly move your existing project to Kinetic"
            description="Quickly transfer your current projects to Kinetic with ease, and get started with all of our powerful tools without missing a beat."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={["top"]}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <KanbanFeatureSection/>
        </div>
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

