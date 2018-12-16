import { InterfaceClaim } from '../readFile/readFile';

type Coordinate = [number, number];

function getAllCoordinates(claim: InterfaceClaim): Coordinate[] {
  const coordinates: Coordinate[] = [];

  for (let x = claim.fromLeft; x < claim.fromLeft + claim.width; x++) {
    for (let y = claim.fromTop; y < claim.fromTop + claim.height; y++) {
      coordinates.push([x, y]);
    }
  }

  return coordinates;
}

interface InterfaceCoordinateCounts {
  [coordinateString: string]: number;
}

function coordinateCountReducer(
  counts: InterfaceCoordinateCounts,
  coordinates: Coordinate[]
): InterfaceCoordinateCounts {
  const newCounts = { ...counts };

  coordinates.forEach(coordinate => {
    const coordinateString = coordinate.join(',');
    newCounts[coordinateString] = (newCounts[coordinateString] || 0) + 1;
  });

  return newCounts;
}

export default function getCountOverlapping(claims: InterfaceClaim[]): number {
  const coordinateCounts: InterfaceCoordinateCounts = claims
    .map(getAllCoordinates)
    .reduce(coordinateCountReducer, {});

  let sum = 0;

  Object.keys(coordinateCounts).forEach(coord => {
    const count = coordinateCounts[coord];

    if (count > 1) {
      sum += 1;
    }
  });

  return sum;
}
