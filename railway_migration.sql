-- DropForeignKey
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_tourId_fkey";

-- DropForeignKey
ALTER TABLE "Inclusion" DROP CONSTRAINT "Inclusion_tourId_fkey";

-- DropForeignKey
ALTER TABLE "Departure" DROP CONSTRAINT "Departure_tourId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_departureId_fkey";

-- DropTable
DROP TABLE "Tour";

-- DropTable
DROP TABLE "Itinerary";

-- DropTable
DROP TABLE "Inclusion";

-- DropTable
DROP TABLE "Departure";

-- DropTable
DROP TABLE "Booking";

-- DropTable
DROP TABLE "Lead";

