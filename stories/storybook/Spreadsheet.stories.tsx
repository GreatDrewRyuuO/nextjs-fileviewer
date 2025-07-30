import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Spreadsheets from "../pages/Spreadsheet";

const meta = {
  title: "Components/Spreadsheet",
  component: Spreadsheets,
  parameters: {
    docs: {
      description: {
        component:
          "A component for displaying and interacting with spreadsheet files.",
      },
    },
  },
  argTypes: {
    showUploadButton: {
      control: "boolean",
      description: "Toggles the visibility of the upload button.",
    },
    showDownloadButton: {
      control: "boolean",
      description: "Toggles the visibility of the download button.",
    },
  },
  args: {
    showUploadButton: true,
    showDownloadButton: true,
  },
} satisfies Meta<typeof Spreadsheets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoDownloadButton: Story = {
  name: "No Download Button",
  args: {
    showDownloadButton: false,
  },
};

export const NoUploadButton: Story = {
  name: "No Upload Button",
  args: {
    showUploadButton: false,
  },
};

export const ViewerOnly: Story = {
  name: "Viewer Only Mode",
  args: {
    showUploadButton: false,
    showDownloadButton: false,
  },
};
