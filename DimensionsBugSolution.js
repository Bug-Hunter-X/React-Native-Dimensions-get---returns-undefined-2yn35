import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      const { width, height } = Dimensions.get('window');
      setDimensions({ width, height });
    };

    getDimensions();
  }, []);

  if (!dimensions) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Window Width: {dimensions.width}</Text>
      <Text>Window Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;