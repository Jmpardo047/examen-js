import React from 'react'

export const ApiComponent = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() =>{
        getImages();
    },[])

  return (
    <>
        <div className="data-list">

        </div>
    </>
  )
}
