// Array of sports facts
const sportsFacts = 
[
    'All-time MLB home-run leader Barry Bonds is the only member of the 500/500 home runs and steals club, not to mention the only member of the 400/400 home runs and steals club.',
    'Hall-of-fame NFL quarterback Steve Young attended Brigham Young University. This college is named after Brigham Young of The Church of Jesus Christ of Latter-day Saints, who also happens to be the great-great-great-grandfather of Steve Young.',
    'In 1935, Jesse Owens broke three world records and tied another in 45 minutes. Owens broke the world records for the 220-yard dash, the 220-yard low hurdles, and the running broad jump, and equaled the world record for the 100-yard dash.',
    'Wilt Chamberlain never fouled out of an NBA basketball game.',
    'Wrestling legend Kevin Nash was highly-recruited for basketball coming out of Michigan. He was the second most sought after, behind Magic Johnson.',
    'Hall of Fame pitcher Gaylord Perry stated, “They’ll put a man on the moon before I hit a home run.” This was in 1963. Six years later, just hours after Neil Armstrong stepped onto the lunar surface, Perry hit the first and only home run of his career.',
    'Babe Ruth acquired his 700th home run baseball by paying the fan who caught it $20.',
    'Cal Hubbard is the only person in both the football and baseball Hall of Fame.',
    'Pelé is the only player to ever be a part of three different World Cup winning teams.',
    'Tiger Woods made his first hole in one at the age of eight years old.'
];

// Function to generate a random index
const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

// Function to generate a random sports fact
const generateRandomSportsFact = () => {
    const randomIndex = getRandomIndex(sportsFacts);
    return sportsFacts[randomIndex];
}

console.log(`Random Sports Fact: ${generateRandomSportsFact()}`);