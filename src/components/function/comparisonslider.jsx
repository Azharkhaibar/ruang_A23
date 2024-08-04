import React, { useState, useRef, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

const ComparisonSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const newPos = ((clientX - rect.left) / rect.width) * 100;
    if (newPos >= 0 && newPos <= 100) {
      setSliderPosition(newPos);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("touchmove", handleMouseMove);
    container.addEventListener("touchend", handleMouseUp);
    container.addEventListener("touchstart", handleMouseDown);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("touchmove", handleMouseMove);
      container.removeEventListener("touchend", handleMouseUp);
      container.removeEventListener("touchstart", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    setSliderPosition(80);
  }, [beforeImage, afterImage]);

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      ref={containerRef}
      cursor="ew-resize"
    >
      <Image src={beforeImage} alt="before" width="100%" height="100%" position="absolute" borderRadius="30px" />
      <Image src={afterImage} alt="after" width="100%" height="100%" borderRadius="30px" position="absolute" clipPath={`polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`} />
      <Box
        position="absolute"
        top="0"
        left={`${sliderPosition}%`}
        width="4px"
        height="100%"
        bgColor="white"
        cursor="ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        display="flex"
        justifyContent="center"
        _hover={{ bgColor: "gray.300" }} // Efek hover pada handle slider
      >
        <Box width="16px" height="16px" bgColor="white" borderRadius="50%" border="2px solid black" mt="calc(50% - 8px)" />
      </Box>
    </Box>
  );
};

export default ComparisonSlider;
