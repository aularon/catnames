import { Handlers } from "$fresh/server.ts";
import image, { imageSrc } from "../../lib/image.ts";
import { name } from "../../lib/name.ts";

export const handler: Handlers = {
  GET() {
    const imageId = image();
    return new Response(
      JSON.stringify({
        name: name(),
        imageId,
        thumbnail: imageSrc(imageId, 200),
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
