import UploadButton from "../upload-button/page"
import cloudinary from 'cloudinary';

import CImage from "./image";

type SearchResult = {
  public_id: any,
  width: any,
  height: any,
}

export default async function GalleryPage() {
  const results = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results()
    .execute() as {resources: SearchResult[]};

  // console.log(results)

  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">图库</h1>
        <UploadButton/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        {
          results.resources.map( ({public_id, width, height} ) =>
            <CImage src={public_id} key={public_id} width={width} height={height}/>
          )
        }
      </div>

    </section>)
}