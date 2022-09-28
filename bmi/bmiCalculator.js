const Jack = {
   name: 'Jack',
   lastname: 'White',
   height:  1.70,
   weight: 79,
   calculateBmi: function(){
     return Math.round(this.weight / Math.pow(this.height, 2))
   },
   
};
const Mike = {
   name: 'Mike',
   lastname: 'Black',
   height:  1.93,
   weight: 91,
   calculateBmi: function(){
      return  Math.round(this.weight / Math.pow(this.height, 2))
    },
}
if(Jack.calculateBmi() > Mike.calculateBmi()) {
   console.log(`BMI ${Jack.name} ${Jack.lastname} (${Jack.calculateBmi()}) выше, чем у ${Mike.name} ${Mike.lastname} (${Mike.calculateBmi()})!`)
} else if (Jack.calculateBmi() < Mike.calculateBmi()) {
   console.log(`BMI ${Mike.name} ${Mike.lastname} (${Mike.calculateBmi()}) выше, чем у ${Jack.name} ${Jack.lastname} (${Jack.calculateBmi()})!`)
} else {
   console.log('Показатели равны')
}