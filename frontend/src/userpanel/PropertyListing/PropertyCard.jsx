import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyListing from "./PropertyListing";
import "./PropertyGrid.css";
import config from "../../config";

const PropertyGrid = () => {
  const location = useLocation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState({});
  const [searchParams, setSearchParams] = useState({
    propertyType: "",
    name: "",
    location: "",
    avgPrice: "",
    landType: "",
  });

  // Extract query parameters from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const params = {
      propertyType: queryParams.get("propertyType") || "",
      name: queryParams.get("name") || "",
      location: queryParams.get("location") || "",
      avgPrice: queryParams.get("avgPrice") || "",
      landType: queryParams.get("landType") || "",
    };
    setSearchParams(params);
  }, [location]);

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${config.baseURL}/fetchprojects`);
        if (response.data.success && Array.isArray(response.data.projects)) {
          setProjects(response.data.projects);
          response.data.projects.forEach((project) => {
            const titleFirstWord = project.tittle.split(" ")[0]; // Extract first word of the title
            fetchImagesByTitle(titleFirstWord);
          });
        } else {
          setError("Error fetching projects.");
        }
      } catch (error) {
        setError("Error fetching projects.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Fetch images for the project
  const fetchImagesByTitle = async (titleFirstWord) => {
    try {
      const response = await axios.get(`${config.baseURL}/uploads/${titleFirstWord}`);
      if (response.data.success) {
        setImages((prevImages) => ({
          ...prevImages,
          [titleFirstWord]: response.data.images,
        }));
      } else {
        console.error(`No images found for ${titleFirstWord}`);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Filter properties based on search parameters
  const filteredProperties = projects.filter((project) => {
    const matchesPropertyType =
      !searchParams.propertyType || project.propertyType.includes(searchParams.propertyType);
    const matchesname =
      !searchParams.name || project.name.toLowerCase().includes(searchParams.name);
    const matchesLocation =
      !searchParams.location || project.location.toLowerCase().includes(searchParams.location.toLowerCase());
    const matchesPrice = !searchParams.avgPrice || project.avgPrice <= parseInt(searchParams.avgPrice, 10);
    const matchesLandType =
      !searchParams.landType || project.landType.toLowerCase().includes(searchParams.landType.toLowerCase());

    return (
      matchesPropertyType &&
      matchesLocation &&
      matchesname && matchesPrice && matchesLandType
    );
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="property-grid">
      <h2>Projects</h2>

      {/* Search bar for live search */}
      <div className="search-bar">
        <select
          value={searchParams.propertyType}
          onChange={(e) =>
            setSearchParams({ ...searchParams, propertyType: e.target.value })
          }
        >
          <option value="">Select Property Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="OfficeSpace">Office Space/IT-ITES</option>
          <option value="MixedUse">Mixed Use</option>
          <option value="studio Apartment">Studio Apartments</option>
          <option value="Agri">Agriculture</option>
        </select>

        {/* Land Type dropdown */}
        <select
          value={searchParams.landType}
          onChange={(e) =>
            setSearchParams({ ...searchParams, landType: e.target.value })
          }
        >
          <option value="">Select Land Type</option>
          <option value="freehold">Freehold</option>
          <option value="ReraApproved">RERA Approved</option>
        </select>

        <input
          type="text"
          placeholder="Search by Property Name"
          value={searchParams.name}
          onChange={(e) =>
            setSearchParams({ ...searchParams, name: e.target.value })
          }
        />

        {/* Location dropdown */}
        <select
          value={searchParams.location}
          onChange={(e) =>
            setSearchParams({ ...searchParams, location: e.target.value })
          }
        >
          <option value="">Select Location</option>
          <option value="noida">Noida</option>
          <option value="delhi">Delhi</option>
          <option value="Greater-Noida">Greater Noida</option>
          <option value="Yamuna-Express">Yamuna Expressway</option>
        </select>

        <select
          value={searchParams.avgPrice}
          onChange={(e) =>
            setSearchParams({ ...searchParams, avgPrice: e.target.value })
          }
        >
          <option value="">Select Price Range Per Sq.Ft.</option>
          <option value="5000">Up to ₹5000</option>
          <option value="10000">Up to ₹10,000</option>
          <option value="15000">Up to ₹15,000</option>
          <option value="20000">Up to ₹20,000</option>
        </select>
      </div>

      <div className="property-list">
        {filteredProperties.map((project, index) => {
          const titleFirstWord = project.tittle.split(" ")[0];
          const mainGalleryImages = images[titleFirstWord]?.mainGallery || []; // Get mainGallery images for the project
          const imgSrc = mainGalleryImages[0] || '/default-image.jpg'; // Use first image or fallback to default

          return (
            <PropertyListing
              key={index}
              property={{
                ...project,
                image: imgSrc, // Use fetched image if available
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyGrid;
