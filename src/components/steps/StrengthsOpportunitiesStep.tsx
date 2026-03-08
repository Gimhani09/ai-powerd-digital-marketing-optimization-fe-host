'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { type StrengthsOpportunities } from '@/types';

interface StrengthsOpportunitiesStepProps {
  data: Partial<StrengthsOpportunities>;
  onDataUpdate: (data: StrengthsOpportunities) => void;
  showErrors?: boolean;
}

const BUSINESS_STRENGTHS = [
  {
    id: 'existing-customers',
    title: 'Strong Existing Customer Base',
    description: 'Loyal customers who return regularly'
  },
  {
    id: 'community-support',
    title: 'Strong Community Support',
    description: 'Local community knows and supports the business'
  },
  {
    id: 'high-quality-products',
    title: 'High-Quality Products/Services',
    description: 'Superior quality compared to competitors'
  },
  {
    id: 'competitive-pricing',
    title: 'Competitive Pricing',
    description: 'Better prices than competitors'
  },
  {
    id: 'excellent-service',
    title: 'Excellent Customer Service',
    description: 'Known for outstanding customer care'
  },
  {
    id: 'unique-location',
    title: 'Great Location',
    description: 'Strategic or high-traffic location'
  },
  {
    id: 'experienced-team',
    title: 'Experienced Team',
    description: 'Skilled and knowledgeable staff'
  },
  {
    id: 'innovative-approach',
    title: 'Innovation & Creativity',
    description: 'Unique approach or creative solutions'
  },
  {
    id: 'positive-reputation',
    title: 'Strong Reputation',
    description: 'Well-known for reliability and trustworthiness'
  },
  {
    id: 'flexible-service',
    title: 'Flexibility & Customization',
    description: 'Able to adapt to customer needs'
  }
];

const GROWTH_OPPORTUNITIES = [
  {
    id: 'social-media-growth',
    title: 'Social Media Expansion',
    description: 'Opportunity to grow on social platforms'
  },
  {
    id: 'partnership-opportunities',
    title: 'Partnership Opportunities',
    description: 'Potential collaborations with other businesses'
  },
  {
    id: 'new-market-segments',
    title: 'New Market Segments',
    description: 'Untapped customer groups to target'
  },
  {
    id: 'product-line-expansion',
    title: 'Product/Service Expansion',
    description: 'Opportunities to add new offerings'
  },
  {
    id: 'online-presence',
    title: 'Digital Presence Growth',
    description: 'Opportunity to strengthen online presence'
  },
  {
    id: 'customer-loyalty-programs',
    title: 'Customer Loyalty Programs',
    description: 'Opportunity to implement retention strategies'
  },
  {
    id: 'seasonal-promotions',
    title: 'Seasonal Marketing',
    description: 'Leverage holidays and seasons for promotions'
  },
  {
    id: 'content-marketing',
    title: 'Educational Content',
    description: 'Opportunity to educate customers and build authority'
  },
  {
    id: 'local-community-events',
    title: 'Community Events',
    description: 'Participate in or sponsor local events'
  },
  {
    id: 'referral-programs',
    title: 'Referral Programs',
    description: 'Leverage satisfied customers for new business'
  }
];

export function StrengthsOpportunitiesStep({ data, onDataUpdate, showErrors }: StrengthsOpportunitiesStepProps) {
  const { register, watch, setValue, reset } = useForm<StrengthsOpportunities>({
    defaultValues: data
  });

  const watchedData = watch();

  useEffect(() => {
    console.log('📥 [StrengthsOpportunitiesStep] received data:', data);
    reset(data);
  }, [data, reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      onDataUpdate(value as StrengthsOpportunities);
    });
    return () => subscription.unsubscribe();
  }, [watch, onDataUpdate]);

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-[#F9FAFB] mb-4">
          What are your business strengths? <span className="text-[#22C55E]">*</span>
          {(Array.isArray(watchedData.strengths) ? watchedData.strengths : []).length > 0 && (
            <span className="ml-2 text-xs text-[#22C55E] font-normal">
              {(Array.isArray(watchedData.strengths) ? watchedData.strengths : []).length} selected
            </span>
          )}
        </label>
        <p className="text-sm text-[#CBD5E1] mb-4">
          Select your key advantages that we can leverage in your marketing strategy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BUSINESS_STRENGTHS.map(strength => (
            <label key={strength.id} className="form-card flex items-start p-4 bg-[#1F2933] border border-[#1F2933] rounded-lg hover:border-[#CBD5E1]/20 cursor-pointer transition-all">
              <input
                type="checkbox"
                {...register('strengths')}
                value={strength.id}
                className="w-4 h-4 mt-1 text-[#22C55E] bg-[#1F2933] border-[#CBD5E1]/30 rounded focus:ring-[#22C55E] focus:ring-2 flex-shrink-0"
              />
              <div className="ml-3">
                <span className="font-medium text-[#F9FAFB] block">
                  {strength.title}
                </span>
                <p className="text-sm text-[#CBD5E1] mt-1">
                  {strength.description}
                </p>
              </div>
            </label>
          ))}
        </div>
        {showErrors && !(Array.isArray(watchedData.strengths) && watchedData.strengths.length > 0) && (
          <p className="text-xs text-red-400 mt-2">Please select at least one strength</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#F9FAFB] mb-4">
          What growth opportunities do you see? <span className="text-[#22C55E]">*</span>
          {(Array.isArray(watchedData.opportunities) ? watchedData.opportunities : []).length > 0 && (
            <span className="ml-2 text-xs text-[#22C55E] font-normal">
              {(Array.isArray(watchedData.opportunities) ? watchedData.opportunities : []).length} selected
            </span>
          )}
        </label>
        <p className="text-sm text-[#CBD5E1] mb-4">
          Select opportunities that align with your business goals and resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GROWTH_OPPORTUNITIES.map(opportunity => (
            <label key={opportunity.id} className="form-card flex items-start p-4 bg-[#1F2933] border border-[#1F2933] rounded-lg hover:border-[#CBD5E1]/20 cursor-pointer transition-all">
              <input
                type="checkbox"
                {...register('opportunities')}
                value={opportunity.id}
                className="w-4 h-4 mt-1 text-[#22C55E] bg-[#1F2933] border-[#CBD5E1]/30 rounded focus:ring-[#22C55E] focus:ring-2 flex-shrink-0"
              />
              <div className="ml-3">
                <span className="font-medium text-[#F9FAFB] block">
                  {opportunity.title}
                </span>
                <p className="text-sm text-[#CBD5E1] mt-1">
                  {opportunity.description}
                </p>
              </div>
            </label>
          ))}
        </div>
        {showErrors && !(Array.isArray(watchedData.opportunities) && watchedData.opportunities.length > 0) && (
          <p className="text-xs text-red-400 mt-2">Please select at least one opportunity</p>
        )}
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-[#F9FAFB] mb-3">
          Additional Notes <span className="text-[#CBD5E1]/40 text-xs font-normal">(Optional)</span>
        </label>
        <textarea
          {...register('additionalNotes')}
          rows={4}
          maxLength={500}
          placeholder="Any additional strengths, opportunities, or context you'd like to share..."
          className="w-full px-4 py-3 bg-[#1F2933] border border-[#1F2933] text-[#F9FAFB] placeholder-[#CBD5E1]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:border-transparent transition-all resize-none"
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-[#CBD5E1]/60">
            Include any unique aspects of your business that might impact your marketing strategy
          </p>
          <span className={`text-xs ml-2 flex-shrink-0 ${(watchedData.additionalNotes?.length || 0) > 450 ? 'text-yellow-400' : 'text-[#CBD5E1]/40'}`}>
            {watchedData.additionalNotes?.length || 0}/500
          </span>
        </div>
      </div>
    </div>
  );
}