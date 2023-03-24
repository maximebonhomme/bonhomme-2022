import { Link, Box, Text, Heading, GridItem } from '@chakra-ui/react';
import Head from 'next/head';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';
import Cursor from '../components/Cursor';
import { Avatar } from '../components/Avatar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Noble Varghese - Backend Developer</title>
      </Head>
      <Cursor />

      <Box py="115px" px={4} maxWidth={500} mx="auto">
        <Grid
          fluid
          templateColumns="repeat(4, 1fr)"
          mb={10}
          alignItems="center"
        >
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Noble Varghese
              </Heading>
              <Text>Backend Developer</Text>
              <Link
                color="white"
                opacity={0.5}
                href="https://www.linkedin.com/in/noble-k-varghese-749bb448/"
              >
                noble-varghese
              </Link>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            GM, I'm Noble. I'm an experienced software developer with 4 years of experience, proficient in Typescript, Python and Django framework, has hands on experience at AWS and Kafka, with strong skills in application development, debugging and project management.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://oslash.com/"
            side="2022 - 2023"
            title="Product Engineer I - Oslash"
            desc="Implemented GraphQL APIs on serverless stack using Typescript capable of returning results in less than 500ms.
            • Designed APIs on Cloudflare workers in Typescript and introduced Caching on Cloudflare returning results in 120ms.
            • Contributed to the setup of Infra As Code (IaC) using terraform and typescript using CDK for Terraform.
            • Optimized the Cloudflare API to reduce the CPU time by more than 50%."
            stack="TS • GraphQL • Serverless Stack • AWS • CloudFlare • Terraform"
          />
          <Experience
            href="https://madstreetden.com/"
            side="2021 - 2022"
            title="Junior Software Engineer - Mad Street Den"
            desc="Ensured seamless flow of data between three microservices, including disaster recovery plans to prevent data loss, maintaining 99.997% uptime, data partitioning, and eventual consistency.
            • Created custom integration and plugins based on clients requirements thereby enabling easy integration and on-boarding.
            • Troubleshooted scaling issues in Kafka pipeline of a micro-service thereby ensuring high throughput and faster processing capable of processing up to 15Mil documents with concurrency.
            • Developed scripts for DynamoDB, RDS (PostgreSQL), and Elastic Search to generate reports and integrated them with cron jobs to Slack, enabling non-technical teams to access them daily.
            • Maintained the AWS service cost in control by implementing better scaling policies and removal of unused services using scripts on AWS saving more than 3000$ per month.
            • Automated the forecast of monthly cost of cloud services based on usage with a slack integration.
            • Devised Migrated data from an existing system to a new system keeping data integrity."
            stack="AWS • Python • Kafka"
          />
          <Experience
            href="https://madstreetden.com/"
            side="2020 – 2021"
            title="Engineering Trainee - Mad Street Den"
            desc="Restructured and re-architected an application from Node js to Python.
          • Developed custom integration and plugins based on clients requirements thereby enabling easy integration, client delight
          and retention.
          • Enhanced coding quality through standard practices and design patterns, reducing redundancy and elevating code to
          production standards. Added automated quality checks and alerts for non-compliant code.
          • Deployed AWS applications with Opsgenie alerts and centralized logging for universal access to logs.
          • Managed EC2 servers with auto scaling and high availability to maintain 99% uptime, utilizing Spotinst for pod
          management."
            stack="AWS • Python • Node js"
          />
          <Experience
            href="https://madstreetden.com/"
            side="2019 – 2020"
            title="Intern - Mad Street Den"
            desc="Designed client requirements as RESTful API over the course of the internship.
            • Handled the upkeep of a microservice which included bug fixes, creation of design documents and enhancements on a
            daily basis."
            stack="AWS • Node js"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@freebird96"
            href="https://github.com/freebird96"
            mb={4}
          />
          <Experience
            side="Instagram"
            title="@noble_varghese_"
            href="https://instagram.com/noble_varghese_?igshid=YmMyMTA2M2Y="
            mb={4}
          />
        </Box>
      </Box>
    </>
  );
}
