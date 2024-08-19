const Card = require("../model/Card.js")
const helper = require('../utils/helpper.js')
const logger = require('../utils/logger.js')
const { ValidationError, NotFoundError, CustomError } = require('../utils/errorHandler.js');  

const createCard = async(req, res) => {
    try {
        const {title, description} = req.body

        if (!title || !description) {
            throw new ValidationError("Title and description are required");
        }

        const existingCard = await Card.findOne({ title });
        if (existingCard) {
            throw new ValidationError("A card with this title already exists");
        }

        logger.info(`Creating a new card with title: ${req.body.title} and description: ${req.body.description}`);  

        const card = new Card({
            id: helper.getUUID("Card"),
            title, 
            description
        })

        await card.save();

        logger.info(`Card created successfully with ID: ${card._id}`);

        res.status(201).json({
            errCode: -1,
            errMsg: 'Created Successfully',
            data: card
        })

    } catch (error) {
        logger.error(`Error creating card: ${error.message}`);

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                errCode: 1,
                errMsg: error.message,
                data: []
            });
        }

        res.status(500).json({
            errCode: 1,
            errMsg: 'Internal Server Error',
            data: []
        });
    }
}

const fetchAllCard = async(req, res) => {
    try {
        const cards = await Card.find();

        logger.info(`Fetched all cards. Total cards: ${cards.length}`);

        res.status(200).json({
            errCode: -1,
            errMsg: 'Fetch Successfully',
            data: cards
        })
    } catch (error) {
        logger.error(`Error fetching cards: ${error.message}`);

        res.status(500).json({ 
            errCode: 1,
            errMsg: 'Internal Server Error',
            data: []
        });
    }
} 

const singleCard = async(req, res) => {
    try {
        const title = req.params.title.trim();

        const card = await Card.findOne({ title: { $regex: new RegExp(title, 'i') } });        
        if (!card) {
            logger.warn(`Card with title: ${req.params.title} not found`);

            throw new NotFoundError("Card not found");
        }

        logger.info(`Fetched card with title: ${card.title}`);

        res.status(200).json({
            errCode: -1,
            errMsg: 'Fetch Successfully',
            data: card
        })
    } catch (error) {
        logger.error(`Error fetching card with title: ${req.params.title}, ${error.message}`);

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                errCode: 1,
                errMsg: error.message,
                data: []
            });
        }

        res.status(500).json({ 
            errCode: 1,
            errMsg: 'Internal Server Error',
            data: []
        });
    }
}

module.exports = {
    createCard : createCard,
    fetchAllCard: fetchAllCard,
    singleCard: singleCard
}