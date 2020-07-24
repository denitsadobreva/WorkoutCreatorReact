import React from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/core";
import { ExerciseDetails } from "../ExerciseDetails/ExerciseDetails";

export class ExerciseCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={this.props.photoUrl} alt={this.props.name} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" variantColor="blue" mr="2px">
              {this.props.type}
            </Badge>
            <Badge rounded="full" px="2" variantColor="blue" mr="2px">
              {this.props.level}
            </Badge>
            {this.props.equipment.map((e) => (
              <Badge key={e} rounded="full" px="2" variantColor="blue" mr="2px">
                {e}
              </Badge>
            ))}
            {this.props.muscleGroups.map((muscle) => (
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                key={muscle}
              >
                {muscle}
              </Box>
            ))}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {this.props.name}
          </Box>

          <Button
            variantColor="blue"
            variant="link"
            onClick={this.handleOpenModal}
          >
            View Details
          </Button>
          <ExerciseDetails
            {...this.props}
            onClose={this.handleCloseModal}
            isOpen={this.state.isModalOpen}
          />
        </Box>
      </Box>
    );
  }
}
