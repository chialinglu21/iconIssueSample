import { HttpClientModule } from "@angular/common/http";
import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { IconRegistryModule } from "src/app/icon-registry.module";
import IconComponent from "./icon.component";

const meta: Meta<IconComponent> = {
  title: "Icon Sample",
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, IconRegistryModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<IconComponent>;

export const Sample1: Story = {};
