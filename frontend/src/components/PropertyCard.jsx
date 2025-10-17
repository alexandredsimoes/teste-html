import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/properties/${property.id}`}>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white">
        {/* Image */}
        <div className="relative overflow-hidden h-64">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-0">
              {property.type === 'residential' ? 'Residential' : 'Commercial'}
            </Badge>
            {property.featured && (
              <Badge className="bg-amber-500 hover:bg-amber-600 text-white border-0">
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Price */}
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
              {property.title}
            </h3>
            <span className="text-2xl font-bold text-emerald-600">
              {formatPrice(property.price)}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Features */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {property.bedrooms && (
              <div className="flex items-center space-x-2">
                <Bed className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{property.bedrooms} Beds</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Bath className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <Square className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">{property.area} sqft</span>
            </div>
          </div>

          {/* View Details Button */}
          <div className="pt-2">
            <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
