import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  AspectRatioBox,
  Box,
  List,
  ListItem,
} from "@chakra-ui/core";
import { FaAngleRight } from "react-icons/fa";

export class ExerciseDetails extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} onClose={this.props.onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{this.props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatioBox maxW="560px" ratio={16 / 9}>
              <Box
                as="iframe"
                title={this.props.name}
                src={this.props.videoUrl}
                allowFullScreen
              />
            </AspectRatioBox>
            <List mt="1rem" mb="0.5rem">
              <ListItem icon={FaAngleRight}>Level: {this.props.level}</ListItem>
              <ListItem icon={FaAngleRight}>Type: {this.props.type}</ListItem>
              <ListItem icon={FaAngleRight}>
                Muscle Groups: {this.props.muscleGroups.join(", ")}
              </ListItem>
              <ListItem icon={FaAngleRight}>
                Equipment: {this.props.equipment.join(", ")}
              </ListItem>
            </List>
            <Box mb="1rem">{this.props.description}</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}
