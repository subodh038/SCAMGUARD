
export type CallStatus = 'Scam' | 'Suspicious' | 'Safe' | 'Unknown';

export interface Call {
  id: string;
  phoneNumber: string;
  callerName: string | null;
  timestamp: Date;
  duration: number | null; // in seconds, null if not answered
  status: CallStatus;
  scamProbability: number; // 0-100
  transcription?: string;
  tags?: string[];
  isBlocked?: boolean;
  reportCount?: number;
}

export interface ScamReport {
  id: string;
  phoneNumber: string;
  reportedAt: Date;
  reportType: string;
  description: string;
  upvotes: number;
  downvotes: number;
}

export interface ScamType {
  id: string;
  name: string;
  description: string;
  warningSignals: string[];
  preventionTips: string[];
}

// Recent calls
export const recentCalls: Call[] = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    callerName: 'Unknown',
    timestamp: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    duration: 45,
    status: 'Scam',
    scamProbability: 98,
    tags: ['IRS Impersonation', 'Threatening'],
    transcription: "This is the IRS. You have unpaid taxes and there's a warrant for your arrest. Call back immediately to resolve this issue.",
    reportCount: 24
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 987-6543',
    callerName: 'Amazon Customer Service',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    duration: 120,
    status: 'Suspicious',
    scamProbability: 75,
    tags: ['Amazon Impersonation', 'Account Security'],
    transcription: "Hi, this is Amazon security. We've detected suspicious activity on your account. We need to verify your payment information.",
    reportCount: 12
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 321-0987',
    callerName: 'John Smith',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    duration: 180,
    status: 'Safe',
    scamProbability: 2,
    reportCount: 0
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 456-7890',
    callerName: 'Microsoft Technical Support',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    duration: 300,
    status: 'Scam',
    scamProbability: 95,
    tags: ['Tech Support Scam', 'Windows'],
    transcription: "Hello, I'm calling from Microsoft. Your computer has been sending virus alerts to our servers. We need remote access to fix this issue.",
    reportCount: 38
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 789-0123',
    callerName: 'Credit Card Services',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    duration: null,
    status: 'Scam',
    scamProbability: 92,
    tags: ['Credit Card Scam', 'Rate Reduction'],
    isBlocked: true,
    reportCount: 56
  }
];

// Statistics for dashboard
export const statistics = {
  totalCallsBlocked: 127,
  scamCallsDetected: 83,
  callsAnalyzed: 302,
  communityReports: 45,
  dailyScamRate: 28, // percentage
};

// Common scam types for education section
export const scamTypes: ScamType[] = [
  {
    id: '1',
    name: 'Government Impersonation',
    description: 'Scammers pretend to be from government agencies like the IRS, Social Security Administration, or FBI to scare people into making payments or revealing personal information.',
    warningSignals: [
      'Threats of arrest or legal action',
      'Demanding immediate payment',
      'Requesting unusual payment methods (gift cards, wire transfers)',
      'Caller ID showing government agency (can be spoofed)',
      'Urgency and high pressure tactics'
    ],
    preventionTips: [
      'Government agencies rarely call without sending letters first',
      'Government will never demand immediate payment over the phone',
      'Never provide personal information to unexpected callers',
      'Hang up and call the agency directly using their official number',
      'Report the call to the FTC'
    ]
  },
  {
    id: '2',
    name: 'Tech Support Scam',
    description: 'Scammers claim to be from well-known tech companies like Microsoft or Apple and convince victims their computer has issues that need immediate fixing.',
    warningSignals: [
      'Unsolicited calls about computer problems',
      'Claims of viruses or security issues on your device',
      'Requests for remote access to your computer',
      'Technical jargon to confuse you',
      'Pressure to buy unnecessary software'
    ],
    preventionTips: [
      "Tech companies don't make unsolicited calls about computer issues",
      "Never give remote access to your computer to unexpected callers",
      'Install legitimate antivirus software',
      'If concerned, hang up and contact the company directly',
      'Keep software updated to reduce actual security risks'
    ]
  },
  {
    id: '3',
    name: 'Lottery/Prize Scam',
    description: "Callers claim you've won a lottery, sweepstakes, or prize but need to pay fees or taxes upfront to claim your winnings.",
    warningSignals: [
      'Notification about winning a contest you never entered',
      'Requirements to pay fees upfront to claim prizes',
      'Requests for banking information to deposit winnings',
      'Foreign lottery offers (which are illegal in the US)',
      'Pressure to keep the win confidential'
    ],
    preventionTips: [
      'Legitimate lotteries never require upfront payment to collect winnings',
      "You can't win a contest you didn't enter",
      'Never pay to receive "prize money"',
      'Research any organization that contacts you about winnings',
      'Consult with family members or financial advisors before acting'
    ]
  },
  {
    id: '4',
    name: 'Robocalls and Telemarketing Fraud',
    description: 'Automated calls that try to get personal information or make fraudulent sales, often claiming to represent legitimate businesses.',
    warningSignals: [
      'Prerecorded message asking you to press a number to speak to someone',
      'Caller ID showing "Customer Service" or similar generic names',
      'Vague or misleading descriptions of products/services',
      'Limited-time offers that require immediate decision',
      'Reluctance to provide written information'
    ],
    preventionTips: [
      'Register your number with the National Do Not Call Registry',
      "Don't press any buttons on robocalls - it confirms your number is active",
      'Use call blocking services or apps',
      'Report illegal robocalls to the FTC',
      'Ask for written information before making any purchases'
    ]
  },
  {
    id: '5',
    name: 'Banking/Credit Card Scam',
    description: "Scammers pose as bank or credit card representatives claiming there's a problem with your account that requires immediate verification of your information.",
    warningSignals: [
      'Caller claims to be from your bank reporting "suspicious activity"',
      'Requests to verify account numbers, passwords, or PINs',
      'Creating urgency about account suspension or fraud alerts',
      'Caller already has some of your information to seem legitimate',
      'Offers to lower interest rates or clear debt easily'
    ],
    preventionTips: [
      'Banks never ask for full account numbers, PINs, or passwords by phone',
      'Hang up and call your bank directly using the number on your card',
      'Enable two-factor authentication on financial accounts',
      'Check your statements regularly for unauthorized charges',
      'Be skeptical of offers that seem too good to be true'
    ]
  }
];

// Recent reports for the database section
export const recentReports: ScamReport[] = [
  {
    id: '1',
    phoneNumber: '+1 (555) 123-4567',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    reportType: 'Government Impersonation',
    description: 'Caller claimed to be from the IRS and threatened arrest for unpaid taxes.',
    upvotes: 15,
    downvotes: 1
  },
  {
    id: '2',
    phoneNumber: '+1 (555) 456-7890',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    reportType: 'Tech Support Scam',
    description: 'Claimed to be from Microsoft and said my computer was infected with a virus.',
    upvotes: 8,
    downvotes: 0
  },
  {
    id: '3',
    phoneNumber: '+1 (555) 789-0123',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    reportType: 'Credit Card Scam',
    description: 'Offered to lower my credit card interest rates but needed my card information first.',
    upvotes: 21,
    downvotes: 2
  },
  {
    id: '4',
    phoneNumber: '+1 (555) 234-5678',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    reportType: 'Prize Scam',
    description: 'Said I won a sweepstakes but needed to pay fees to claim the prize.',
    upvotes: 12,
    downvotes: 1
  },
  {
    id: '5',
    phoneNumber: '+1 (555) 876-5432',
    reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
    reportType: 'Charity Scam',
    description: "Claimed to be collecting for disaster relief but couldn't provide verification information.",
    upvotes: 7,
    downvotes: 0
  }
];
