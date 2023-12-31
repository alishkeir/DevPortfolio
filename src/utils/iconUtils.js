import React from 'react';

export const getIconComponent = async (iconName) => {
  try {
    // Import the entire 'react-icons/fa6' module dynamically
    const icons = await import('react-icons/fa6');
    const icons2 = await import('react-icons/si');

    // Check if the requested icon exists in the imported module
    if (icons[iconName]) {
      // Create and return the React element for the requested icon
      const IconComponent = icons[iconName];
      return React.createElement(IconComponent);
    } else if (icons2[iconName]) {
      // Create and return the React element for the requested icon
      const IconComponent = icons2[iconName];
      return React.createElement(IconComponent);
    } else {
      // Log an error if the requested icon does not exist
      console.error(`Icon not found: ${iconName}`);
      return iconName;
    }
  } catch (error) {
    // Log an error if there is any issue with dynamic import
    console.error(`Error loading icon: ${iconName}`, error);
    return iconName;
  }
};
