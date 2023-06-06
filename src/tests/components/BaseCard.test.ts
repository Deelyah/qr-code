import BaseCard from "../../components/cards/BaseCard.vue";
import { mount } from "@vue/test-utils";

describe("BaseCard", () => {
  it("should have a link displayed as part of the qrcode", () => {
    const link = "https://spotify.com";
    const wrapper = mount(BaseCard, {
      props: { link, image: "" },
    });
    expect(wrapper.find("div").text()).toEqual(`Link: ${link}`);
  });

  it("should be a render image", () => {
    const link = "https://google.com";
    const image =
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NgsYLjWH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gc6h5et1tq46yuyu8ce0.png";
    const wrapper = mount(BaseCard, {
      props: { link, image },
    });

    const classes = ["shadow-lg", "border", "mt-10"];
    expect(wrapper.find("div").text()).toEqual(`Link: ${link}`);
    expect(wrapper.find("img").attributes("src")).toEqual(`${image}`);
    expect(wrapper.classes()).toEqual(classes);
    expect(wrapper.classes().length).toEqual(classes.length);
  });
});
