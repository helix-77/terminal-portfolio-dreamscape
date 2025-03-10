
import React from 'react';
import { Image } from 'lucide-react';

const Photos = () => {
  // In a real app, these would be actual image paths from your project
  const photos = [
    {
      id: 1,
      title: 'Project Showcase',
      description: 'Live demo presentation at Tech Conference 2023',
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    },
    {
      id: 2,
      title: 'Team Collaboration',
      description: 'Working with my dev team on our latest project',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    },
    {
      id: 3,
      title: 'Workshop Session',
      description: 'Leading a React workshop for junior developers',
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
    },
    {
      id: 4,
      title: 'Office Setup',
      description: 'My productivity-focused workspace',
      url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705',
    },
    {
      id: 5,
      title: 'Design Brainstorming',
      description: 'Wireframing session for a new application',
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    },
    {
      id: 6,
      title: 'Tech Meetup',
      description: 'Networking at the annual developer conference',
      url: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-4">
        <Image className="text-neon-blue" size={24} />
        <h3 className="text-xl font-semibold">Photo Gallery</h3>
      </div>

      <p className="text-lg leading-relaxed mb-6">
        Visual highlights from my professional journey and projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-lg">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h4 className="text-white font-bold">{photo.title}</h4>
              <p className="text-gray-200 text-sm">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
