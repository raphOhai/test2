const fs = require('fs');
const path = require('path');
const sharp = require('sharp');


const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.webp', '.tiff', '.tif', '.bmp', '.gif'];

/**
 * @param {string} dir
 * @param {string[]} fileList
 * @returns {string[]}
 */
function getImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            getImageFiles(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (SUPPORTED_FORMATS.includes(ext) && ext !== '.svg' && ext !== '.webp') {
                fileList.push(filePath);
            }
        }
    });
    
    return fileList;
}

/**
 * @param {string} inputPath
 * @param {string} outputPath
 * @param {number} quality
 */
async function convertToWebP(inputPath, outputPath, quality = 80) {
    try {
        await sharp(inputPath)
            .webp({ 
                quality: quality,
                effort: 6
            })
            .toFile(outputPath);
        
        console.log(`INFO: Converted: ${path.relative(process.cwd(), inputPath)} → ${path.relative(process.cwd(), outputPath)}`);
        
        const originalSize = fs.statSync(inputPath).size;
        const webpSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`   📊 Size: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% reduction)`);
        
    } catch (error) {
        console.error(`ERROR: Failed to convert ${inputPath}:`, error.message);
    }
}

/**
 * @param {Object} options
 * @param {number} options.quality
 * @param {boolean} options.keepOriginals
 * @param {string} options.publicDir
 */
async function convertImagesToWebP(options = {}) {
    const {
        quality = 80,
        keepOriginals = true,
        publicDir = './public'
    } = options;
    
    console.log('INFO: Starting image conversion to WebP...\n');
    

    if (!fs.existsSync(publicDir)) {
        console.error(`ERROR: Public directory not found: ${publicDir}`);
        return;
    }
    

    const imageFiles = getImageFiles(publicDir);
    
    if (imageFiles.length === 0) {
        console.log('INFO: No images found to convert.');
        return;
    }
    
    console.log(`INFO: Found ${imageFiles.length} images to convert:\n`);
    
    let converted = 0;
    let failed = 0;
    

    for (const imagePath of imageFiles) {
        const dir = path.dirname(imagePath);
        const name = path.parse(imagePath).name;
        const webpPath = path.join(dir, `${name}.webp`);
   
        if (fs.existsSync(webpPath)) {
            console.log(`INFO: Skipped: ${path.relative(process.cwd(), webpPath)} (already exists)`);
            continue;
        }
        
        try {
            await convertToWebP(imagePath, webpPath, quality);
            converted++;
            if (!keepOriginals) {
                fs.unlinkSync(imagePath);
                console.log(`🗑️  Deleted original: ${path.relative(process.cwd(), imagePath)}`);
            }
            
        } catch (error) {
            console.error(`ERROR: Error processing ${imagePath}:`, error.message);
            failed++;
        }
        
        console.log(''); 
    }
    

    console.log('INFO: Conversion Summary:');
    console.log(`SUCCESS: Successfully converted: ${converted} images`);
    if (failed > 0) {
        console.log(`ERROR: Failed conversions: ${failed} images`);
    }
    console.log(`INFO: Originals ${keepOriginals ? 'kept' : 'deleted'}`);
    console.log('\nSUCCESS: Image conversion completed!');
}

if (require.main === module) {

    const args = process.argv.slice(2);
    const options = {};
    
    args.forEach((arg, index) => {
        switch (arg) {
            case '--quality':
                options.quality = parseInt(args[index + 1]) || 80;
                break;
            case '--delete-originals':
                options.keepOriginals = false;
                break;
            case '--public-dir':
                options.publicDir = args[index + 1] || './public';
                break;
        }
    });
    
    convertImagesToWebP(options).catch(console.error);
}

module.exports = { convertImagesToWebP, getImageFiles, convertToWebP };