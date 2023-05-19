import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export function ImageGallery({ items }) {
  const [open, setOpen] = React.useState(false);
  const [listSlides, setListSlides] = React.useState(false);
  const zoomRef = React.useRef(null);

  React.useEffect(() => {
    let ll = [];
    if (items !== undefined) {
      console.log("images" + items.images);

      ll = items.images.map((image) => {
        let image_id = image.ID;
        let image_type = image.Type;
        let low_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/300px/${image_id}.png`;
        let high_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/1000px/${image_id}.png`;

        const list_slides = {
          src: high_image_path,
          alt: image_type,
          srcSet: [{ src: low_image_path }, { src: high_image_path }],
          title: image_id,
          description: image_type, 
        };

        console.log(list_slides);
        return list_slides;
      });
    }
    setListSlides(ll);
  }, [items]);

  return (
    <div>
      {items === undefined ? (
        <Typography>NO IMAGES</Typography>
      ) : (
        items.images.length > 0 ? (
          <div>
            <Button onClick={() => setOpen(true)}> Открыть изображения модели </Button>
            <Lightbox open={open} close={() => setOpen(false)} slides={listSlides} plugins={[Captions, Zoom]} 
            zoom={{ ref: zoomRef }}
            on={{click: () => zoomRef.current?.zoomIn() }} 
            />
          </div>
        ) : (
          <Typography>NO IMAGES TO DISPLAY</Typography>
        )
      )}
    </div>
  );
}

// function ImageView({ items }) {
//     console.log('images' + items);
//     if (items !== undefined){
//         console.log('images' + items.images);

//         if (items.images.length === 0) {
//           return <div>No images</div>;
//         }
//       }

//         return (
//         <Grid container spacing={2}>
//           {items.images.map((image) => {
//             let image_id = image.ID;

//             let low_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/300px/${image_id}.png`;
//             let high_image_path = `https://www.rssdabase.su/RSSDA/imagery/ve/1000px/${image_id}.png`;

//             return (
//               <Grid item xs={4} key={image_id}>
//                 <img src={low_image_path} alt={`Image ${image_id}`} />
//               </Grid>
//             )
//           })}
//         </Grid>
//       );
//     };
