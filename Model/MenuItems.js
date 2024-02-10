const MeunModel= mongoose.Schema({
   MeunPizza:{
    type:[Array]
   },
   MeunPalts:{
    type:[Array]
   },
   MeunBurges:{
     type:[Array]
   }
})
export default mongoose.model('Meun' ,MeunModel)