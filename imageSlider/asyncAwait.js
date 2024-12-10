function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walked the dog");
      } else {
        reject(`You didnt walked dog`);
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("You clean the kitechen");
      } else {
        reject("you didnt cleaned kitchen");
      }
    }, 2500);
  });
}
function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let takedOutTrash = false;
      if (takedOutTrash) {
        resolve("You take out the trash🚮");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

    async function doChores() {
        try {
          const walkDogResult = await walkDog();
          console.log(walkDogResult);
          const cleanKitchenResult = await cleanKitchen();
          console.log(cleanKitchenResult);
          const takeOutTrashRes = await takeOutTrash();
          console.log(takeOutTrashRes);
          console.log(`You finished all the chores`);
        } catch (e) {
          console.error(e);
        }
        
    }
doChores();