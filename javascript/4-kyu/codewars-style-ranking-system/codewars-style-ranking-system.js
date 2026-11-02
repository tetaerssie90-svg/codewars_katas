    } else {
      
      points = 10 * difference * difference;
    }
​
    this.progress += points;
​
    
    while (this.progress >= 100 && this.rank < 8) {
      this.progress -= 100;
​
      
      const currentIndex = validRanks.indexOf(this.rank);
      this.rank = validRanks[currentIndex + 1];
    }
​
  
    if (this.rank === 8) {
      this.progress = 0;
    }
  }
}
​