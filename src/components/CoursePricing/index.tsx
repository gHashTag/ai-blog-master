import { pricingPlans } from './PricingPlans';

export function CoursePricing() {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h2 className="text-5xl font-bold mb-8 text-center">Тарифы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="flex flex-col justify-between h-full rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className={`p-4 rounded-t-lg text-white ${getColor(index)}`}>
              <h3 className="text-xl font-bold">{plan.title}</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-b-lg flex flex-col justify-between flex-grow">
              <div>
                <p className="text-2xl font-bold mb-2">{plan.price}</p>
                <div className="mt-4 text-gray-600">
                  <p dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <a href={plan.link} className={`inline-block w-full px-8 py-3 ${getButtonColor(index)} text-white font-bold rounded shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform text-center`}>{plan.price}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getColor(index: number) {
  const colors = ['bg-blue-500', 'bg-pink-500', 'bg-green-500', 'bg-purple-500'];
  return colors[index % colors.length];
}

function getButtonColor(index: number) {
  const buttonColors = ['bg-gradient-to-r from-blue-500 to-blue-700', 'bg-gradient-to-r from-pink-500 to-pink-700', 'bg-gradient-to-r from-green-500 to-green-700', 'bg-gradient-to-r from-purple-500 to-purple-700'];
  return buttonColors[index % buttonColors.length];
}