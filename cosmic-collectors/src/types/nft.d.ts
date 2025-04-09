export interface NFTItem {
    id: string
    name: string
    image: string
    rarity: 'Legendary' | 'Epic' | 'Rare' | 'Uncommon'
    price: string
    rating: number
    description: string
  }
  