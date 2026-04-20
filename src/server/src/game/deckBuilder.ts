import { Card } from '@7wonders/shared';
import { AGE1_CARDS, AGE2_CARDS, AGE3_CARDS } from './cards';

/** Fisher-Yates shuffle (in-place). */
export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Build the deck for a given age and player count.
 * Age III: guilds are filtered to exactly playerCount + 2 random cards.
 * Result: playerCount × 7 cards total.
 */
export function buildAgeDeck(age: 1 | 2 | 3, playerCount: number): Card[] {
  const allCards = age === 1 ? AGE1_CARDS : age === 2 ? AGE2_CARDS : AGE3_CARDS;

  // Filter by player count
  const eligible = allCards.filter(c => c.minPlayers.some(min => playerCount >= min));

  if (age !== 3) {
    shuffle(eligible);
    return eligible;
  }

  // Age III: separate guilds and randomly select playerCount + 2
  const guilds = eligible.filter(c => c.color === 'purple');
  const nonGuilds = eligible.filter(c => c.color !== 'purple');

  const guildCount = playerCount + 2;
  shuffle(guilds);
  const selectedGuilds = guilds.slice(0, guildCount);

  const deck = [...nonGuilds, ...selectedGuilds];
  shuffle(deck);
  return deck;
}

/**
 * Deal cards from the deck into hands of 7 for each player.
 */
export function dealHands(deck: Card[], playerCount: number): Card[][] {
  const hands: Card[][] = Array.from({ length: playerCount }, () => []);
  for (let i = 0; i < deck.length; i++) {
    hands[i % playerCount].push(deck[i]);
  }
  return hands;
}
