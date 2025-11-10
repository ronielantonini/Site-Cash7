import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CreditCard, DollarSign, PiggyBank } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Empréstimo Consignado',
    description: 'Crédito seguro com desconto em folha para servidores públicos, com taxas competitivas e processo ágil.',
    icon: <DollarSign className="w-12 h-12" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    title: 'Cartão Benefício',
    description: 'Cartão exclusivo para servidores públicos com benefícios especiais, cashback e programa de recompensas.',
    icon: <CreditCard className="w-12 h-12" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 3,
    title: 'FGTS e Outros',
    description: 'Soluções completas para acesso ao FGTS e outros benefícios, com consultoria especializada.',
    icon: <PiggyBank className="w-12 h-12" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Main Carousel Card */}
      <div className={`${currentProduct.bgColor} rounded-lg p-8 md:p-12 shadow-md transition-all duration-300`}>
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className={`${currentProduct.color} mb-6`}>
            {currentProduct.icon}
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {currentProduct.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl">
            {currentProduct.description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-8">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir para produto ${index + 1}`}
          />
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => goToSlide(index)}
            className={`p-6 rounded-lg transition-all cursor-pointer border-2 ${
              index === currentIndex
                ? `${product.bgColor} border-blue-600 shadow-lg`
                : 'bg-white border-gray-200 hover:shadow-md'
            }`}
          >
            <div className={`${product.color} mb-4 flex justify-center`}>
              {product.icon}
            </div>
            <h4 className={`font-bold text-base mb-2 ${
              index === currentIndex ? 'text-blue-700' : 'text-gray-900'
            }`}>
              {product.title}
            </h4>
            <p className={`text-sm leading-relaxed ${
              index === currentIndex ? 'text-gray-700' : 'text-gray-600'
            }`}>
              {product.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
