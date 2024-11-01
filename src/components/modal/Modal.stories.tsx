import { StoryObj } from "@storybook/react";
import DgModal from "./Modal";
import React, { useState } from "react";
import DgButton from "../button/Button";
import { fn } from '@storybook/test';

export default {
  title: "Components/Modal",
  component: DgModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: { description: 'Casoa a função `onClose` não seja passada o modal não sera fechado ao clicar no backdrop do modal.' }
  },
};

type Story = StoryObj<any>;
export const Exemplo: Story = {
  args: {
    open: false,
    onClose: fn()
  },

  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <DgButton onClick={() => setIsOpen(!isOpen)}>Open modal</DgButton>

        <DgModal open={isOpen} onClose={() => setIsOpen(false)}>
          <div
            style={{
              background: "#eee",
              border: '1px solid #ddd',
              padding: "15px",
              width: "350px",
            }}
          >
            <h3>What is Lorem Ipsum?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DgButton size="sm" color="danger" onClick={() => setIsOpen(!isOpen)}>Close modal</DgButton>
            </div>
          </div>
        </DgModal>
      </>
    );
  },
};
