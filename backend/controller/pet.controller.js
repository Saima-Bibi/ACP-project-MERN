import Pet from '../model/pet.model.js'

export const getPet = async (req, res) => {
try{
    const pet = await Pet.find()
    res.status(200).json(pet);

}catch(error){
    console.log("Error : ", error)
    res.status(500).json(error);
}
}