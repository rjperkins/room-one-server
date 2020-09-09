const needle = require('needle');
const excelToJson = require('convert-excel-to-json');
require('dotenv').config();

exports.getdjList = async (req, res) => {
  const result = await excelToJson({
    sourceFile: './Room1.xlsx',
    columnToKey: {
      "A": "DJ",
      "B": "Genres",
      "C": "Name",
      "D": "Surname",
      "E": "City",
      "F": "Country",
      "G": "ProfilePicture",
      "H": "GoogleDriveLink",
      "I": "SocialMediaLinks",
      "J": "DJBio",
      "K": "Room1GuestMixLink",
      "L": "LiveRecordedClubMixes",
      "M": "NonRoom1OnlineMixes",
      "N": "Mobile",
      "O": "Label",
      "P": "BookDJContact",
      "Q": "Label",
      "R": "PreviousEventFlyers",
      "S": "IsRecordLabel"
    }
  });
  res.json(result);

}

exports.getGalleryURLs = async (_, res) => {
  try {
    await needle.get(`https://${process.env.COUDINARY_PUBLIC_KEY}:${process.env.COUDINARY_PRIVATE_KEY}@api.cloudinary.com/v1_1/dnonz22ez/resources/image?max_results=500`, function (error, response) {
      if (!error && response.statusCode === 200)
        res.status(200).send(response.body)
    });
  } catch (error) {
    console.log(error);
  }
}