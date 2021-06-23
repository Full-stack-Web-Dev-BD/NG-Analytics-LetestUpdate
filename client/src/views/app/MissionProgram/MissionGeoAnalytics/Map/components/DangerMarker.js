import React, { useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

const DangerMarker = ({ selectedState, projects }) => {
  const [myMarkers, setMyMarkers] = useState({
    features: [
      {
        geometry: {
          coordinates: [3.551223, 28.356148],
        },
        properties: {
          stateName: 'Akwa',
          label: 'Paris Foret 77760 Achères-la-Forêt',
          groupName: '',
        },
      },
      {
        geometry: {
          coordinates: [12.069561, 13.415211],
        },
        properties: {
          stateName: 'Akwa',
          label: 'Paris 83170 Brignoles',
          groupName: '',
        },
      },
      {
        geometry: {
          coordinates: [10.418837, 42.758777],
        },
        properties: {
          stateName: 'Abia ',
          label: 'Paris 33880 Saint-Caprais-de-Bordeaux',
          groupName: '',
        },
      },
      {
        geometry: {
          coordinates: [7.156967, 67.336761],
        },
        properties: {
          stateName: 'Abia ',
          label: 'Paris Buton 37140 Bourgueil',
          groupName: '',
        },
      },
      {
        geometry: {
          coordinates: [9.526894, 23.762486],
        },
        properties: {
          stateName: 'Akwa',
          label: 'Paris 40500 Saint-Sever',
          groupName: '',
        },
      },
    ],
  });
  useEffect(() => {
    console.log('project', projects);
  }, []);
  // custom marker
  const iconMarkup = renderToStaticMarkup(
    <i class="fas fa-circle" style={{ color: '#B7407A', fontSize: '4px' }}></i>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  // Aide: '';
  // BTOR: 'ongoing';
  // CITY: 'Oyo Ogbomoso';
  // MissionDelivery: 'Country Dialogue';
  // MissionEndDate: '6/4/21';
  // MissionNotification: 'Signed';
  // MissionStartDate: '5/29/21';
  // ProjectTitle: '';
  // SAPID: 'P-NG-FA0-012';
  // STATE: 'Oyo';
  // Status: 'Done';
  // TOR: 'ongoing';
  // Team: 'John Doe';
  // TeamLeader: 'Hello World!';
  // Type: 'Project';
  // TypeofMission: 'General Identification';
  // capital: 'minor';
  // country: 'Nigeria';
  // date: '2021-06-05T11:57:12.508Z';
  // iso: 'NG';
  // lat: '8.133725';
  // lng: '4.240144';
  // population: '951000';
  // population_proper: '239127';
  // __v: 0;
  // _id: '60bb6698cd79af1ef892278c';

  const markers = projects.map((mark, i) => {
    if (selectedState === 'All') {
      return (
        <Marker
          position={[mark.lat, mark.lng]}
          icon={customMarkerIcon}
          riseOnHover="hello"
        >
          <Popup>
            Alhamdulillah <br />
            {mark.CITY}
            groupName:''
          </Popup>
        </Marker>
      );
    } else {
      if (selectedState === mark.STATE) {
        return (
          <Marker
            position={[mark.lat, mark.lng]}
            icon={customMarkerIcon}
            riseOnHover="hello"
          >
            <Popup>
              Alhamdulillah <br />
              {mark.CITY}
              groupName:''
            </Popup>
          </Marker>
        );
      } else {
        return null;
      }
    }
  });
  return <>{markers}</>;
};

export default DangerMarker;
