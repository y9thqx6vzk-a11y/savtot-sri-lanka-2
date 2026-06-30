import React from 'react';
import { useSite } from '../../contexts/SiteContext';

export default function MedicalWaiver() {
  const { lang } = useSite();

  return (
    <div className="space-y-4 text-sm text-stone-700 leading-relaxed" dir="ltr">
      <h3 className="font-bold text-lg text-teal-900 text-center mb-4">
        Sri Lanka Trip Participant Waiver, Release and Assumption of Risk
      </h3>
      <p>
        I, the undersigned participant, am voluntarily joining a private group trip to Sri Lanka organized informally by Naomi Grossman and/or other trip organizers, coordinators, hosts, volunteers or related persons (collectively, the &quot;Organizers&quot;).
      </p>
      <p>
        I understand and acknowledge that travel, including international travel, involves inherent risks. These risks may include, among other things, illness, injury, bodily harm, accidents, transportation delays or accidents, weather conditions, political or civil unrest, theft, loss of property, medical emergencies, food or water-related illness, activities arranged during the trip, acts or omissions of third-party providers, and, in extremely rare cases, loss of life.
      </p>
      <p>
        I confirm that I am participating in the trip voluntarily and at my own risk. I am responsible for determining whether I am physically, medically and personally able to participate in the trip and in any activities during the trip. I understand that the Organizers are not professional tour operators, travel agents, medical providers, security consultants or insurers, and that any hotels, transportation providers, guides, restaurants, activity providers or other third parties are independent providers and are not agents or employees of the Organizers.
      </p>
      <p>
        To the fullest extent permitted by applicable law, I hereby release, waive and discharge Naomi Grossman and all other Organizers from any and all claims, liabilities, demands, actions, damages, costs, losses or expenses of any kind, whether known or unknown, arising out of or relating to my participation in the trip, including any injury, bodily harm, illness, economic loss, property damage, delay, inconvenience, emotional distress or loss of life, except to the extent such liability cannot legally be waived.
      </p>
      <p>
        I further agree that I will not bring any claim, lawsuit or demand against Naomi Grossman or any other Organizer arising out of or relating to the trip, and I agree to indemnify and hold them harmless from any claims, losses, damages, costs or expenses, including reasonable legal fees, arising from my own actions, omissions, decisions, conduct, medical condition, or participation in trip activities.
      </p>
      <p>
        I understand that I am solely responsible for obtaining and maintaining appropriate travel insurance, medical insurance, trip cancellation insurance and any other insurance I may require. I am also responsible for my passport, visas, vaccinations, medications, personal belongings, safety, and compliance with all applicable laws, rules and instructions during the trip.
      </p>
      <p>
        I confirm that I have read this waiver carefully, understand its meaning, and sign it voluntarily. I understand that by signing this document, I am giving up certain legal rights to the fullest extent permitted by law.
      </p>
    </div>
  );
}
