import React from 'react';

interface LayerProps {
  title: string;
  items: string[];
  color: string;
  index: number;
}

const Layer: React.FC<LayerProps> = ({ title, items, color, index }) => {
  const yOffset = index * 85;
  
  return (
    <g transform={`translate(0, ${yOffset})`}>
      {/* Layer background */}
      <rect
        x="20"
        y="0"
        width="360"
        height="70"
        rx="8"
        fill={`${color}15`}
        stroke={color}
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Layer title */}
      <text
        x="40"
        y="28"
        fill={color}
        fontSize="14"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {title}
      </text>
      
      {/* Layer items */}
      <g transform="translate(40, 42)">
        {items.map((item, i) => (
          <g key={item} transform={`translate(${i * 90}, 0)`}>
            <rect
              x="0"
              y="0"
              width="80"
              height="20"
              rx="4"
              fill={`${color}25`}
              stroke={color}
              strokeWidth="1"
              opacity="0.6"
            />
            <text
              x="40"
              y="14"
              fill="#ffffff"
              fontSize="10"
              fontWeight="500"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {item}
            </text>
          </g>
        ))}
      </g>
      
      {/* Connection lines to next layer */}
      {index < 3 && (
        <>
          <line
            x1="100"
            y1="70"
            x2="100"
            y2="85"
            stroke={`${color}60`}
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
          <line
            x1="200"
            y1="70"
            x2="200"
            y2="85"
            stroke={`${color}60`}
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
          <line
            x1="300"
            y1="70"
            x2="300"
            y2="85"
            stroke={`${color}60`}
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
        </>
      )}
    </g>
  );
};

export const AIStackLayers: React.FC = () => {
  const layers = [
    {
      title: 'Foundation Models',
      items: ['GPT-4', 'Claude', 'Gemini', 'Llama'],
      color: '#60A5FA', // Light Blue
    },
    {
      title: 'Orchestration',
      items: ['LangChain', 'LlamaIndex', 'Semantic'],
      color: '#3B82F6', // Blue
    },
    {
      title: 'Vector DBs',
      items: ['Pinecone', 'Weaviate', 'Qdrant', 'Chroma'],
      color: '#2563EB', // Darker Blue
    },
    {
      title: 'Monitoring',
      items: ['LangSmith', 'Weights&Biases', 'Helicone'],
      color: '#1E40AF', // Deep Blue
    },
  ];

  return (
    <svg
      width="400"
      height="360"
      viewBox="0 0 400 360"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background */}
      <rect width="400" height="360" fill="transparent" />
      
      {/* Title */}
      <text
        x="200"
        y="20"
        fill="#9CA3AF"
        fontSize="12"
        fontWeight="500"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.5"
      >
        AI TECHNOLOGY STACK
      </text>
      
      {/* Layers */}
      <g transform="translate(0, 35)">
        {layers.map((layer, index) => (
          <Layer
            key={layer.title}
            title={layer.title}
            items={layer.items}
            color={layer.color}
            index={index}
          />
        ))}
      </g>
    </svg>
  );
};

export default AIStackLayers;

