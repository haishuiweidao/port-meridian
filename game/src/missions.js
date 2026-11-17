// Story missions for Port Meridian. All original: Mara Voss, a courier who
// gets pulled into one last job for the harbour fixer, Sal Moreno.
export const MISSIONS = [
  {
    id: 1, name: 'First Pickup', giver: 'Sal Moreno',
    brief: 'Sal needs a parcel collected from the north market. Walk or drive to the yellow marker, grab it, then deliver it to the green drop-off. No trouble — yet.',
    steps: [
      { text: 'Go to the yellow pickup marker', target: { x: 500, y: 200 }, kind: 'pickup' },
      { text: 'Deliver the parcel to the green drop-off', target: { x: 2000, y: 1400 }, kind: 'deliver' },
    ],
    reward: 200,
  },
  {
    id: 2, name: 'Hot Delivery', giver: 'Sal Moreno',
    brief: 'The parcel is hot. The moment you pick it up the harbour police will be on you — wanted level 2. Lose them or outrun them, then make the delivery.',
    steps: [
      { text: 'Pick up the parcel — police will come', target: { x: 1100, y: 800 }, kind: 'pickup', wanted: 2 },
      { text: 'Deliver it while the police chase you', target: { x: 800, y: 1700 }, kind: 'deliver' },
    ],
    reward: 400,
  },
  {
    id: 3, name: 'The Harbour Job', giver: 'Sal Moreno',
    brief: 'One last job. Steal the white coupe parked by the marina, drive it to the harbour gate, and shake the police — wanted level 3. Finish this and Mara is free.',
    steps: [
      { text: 'Steal the white coupe by the marina', target: { x: 2300, y: 1400 }, kind: 'steal' },
      { text: 'Drive the coupe to the harbour gate', target: { x: 1400, y: 1700 }, kind: 'deliver', wanted: 3 },
    ],
    reward: 800,
  },
];
export function missionIntro(m) {
  return `${m.name} — ${m.giver}: ${m.brief}`;
}
