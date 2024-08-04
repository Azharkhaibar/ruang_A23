import React from "react";
import { Box, Text, Heading, Container, Image, Icon, Card, CardBody } from "@chakra-ui/react";
import { BenefitDataCard, BenefitSubTitle } from "../../data/metadata";
import { RecentProjectCard } from "../../data/metadata";
export const CardBenefit = () => {
  return (
    <>
      <Container maxW="10xl" py={20} h="80vh">
        <Heading textAlign="center" mb={10}>
          Our Benefit
          <Text fontSize="18px" fontWeight={450} pt={5}>
            {BenefitSubTitle.SubTitle}
          </Text>
        </Heading>
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={8} pt={6}>
          {BenefitDataCard.map((cardBenefit) => (
            <Card key={cardBenefit.id} w="388px" h="500px" boxShadow="lg" borderRadius="0px 0px 20px 20px" textAlign="left">
              <Box bgGradient="linear(to left, hwb(183 23% 23% / 0.541), #3aa6b9)" pl={6} py={2} borderRadius="20px 0px 50px 0px">
                <Icon as={cardBenefit.icon} boxSize={12} color="teal.500" mt={4} filter="invert(1)" />
              </Box>
              <Box p={6}>
                <Heading fontSize="xl" mb={4}>
                  {cardBenefit.titleBenefit}
                </Heading>
                <Text pt={2}>{cardBenefit.descBenefit}</Text>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};


// RECENT CARD PROJECT ON PROGRESS //

export const RecentProject = () => {
  return (
    <>
      <Container maxW="10xl" h="100vh" bgColor="#3aa6b9">
        <Heading textAlign="center" pt={10} color="white" fontFamily="Montserrat, sans-serif">
          Our Recent project
          <Text fontSize="18px" fontWeight="md" pt={5} color="white" fontWeight="500">
            This is project that we do
          </Text>
        </Heading>
        <Box w="100%" h="100%" bgColor="red">
          {RecentProjectCard.map((Recent) => {
            <Card key={Recent.id} w="400px" h="500px">
              <Image src={Recent.imgRecentProject} w={400} h="auto" />
              <Box>
                <Heading fontSize="25px" fontWeight="md">
                  {Recent.titleRecentProject}
                  <Text fontSize="18px" opacity="0.6" fontWeight="md">
                    {Recent.subDescRecentProject}
                  </Text>
                </Heading>
              </Box>
            </Card>;
          })}
        </Box>
      </Container>
    </>
  );
}
