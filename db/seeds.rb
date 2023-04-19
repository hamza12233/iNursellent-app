# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

expertises = [
  { name: "Cardiac", points: 10 },
  { name: "Maternity",points: 8 },
  { name: "look correct",points: 3 },
  { name: "Neurology",points: 6 },
  { name: "ER",points: 7 },
  { name: "Critical care",points: 10 },
  { name: "ICU",points: 10 },
  { name: "NICU",points: 10 },
  { name: "Gastroenterology",points:1 },
  { name: "General surgery",points:4 },
  { name: "Gynaecology",points: 8 },
  { name: "Haematology",points: 3 },
  { name: "Nephrology",points: 9 },
  { name: "Oncology",points: 2 },
  { name: "Ophthalmology",points:8 },
  { name: "Orthopaedics",points: 6 },
  { name: "Renal unit",points: 5 },
  { name: "Urology",points: 3 },
  { name: "Perioperative/surgical",points: 10 },
  { name: "Pediatric/NICU",points: 10 },
  { name: "ICU/CCU",points: 10 },
  { name: "Other",points: nil}
]
expertises.each do |e|
  Expertise.create!(name: e[:name], points: e[:points])
end

puts "===> Expertises Created"

institutes = [
  {name: 'Federal Institute of Health Sciences', address: 'Main Boulevard Road', country: 'Pakistan' },
  {name: 'MARS Institute of Health Sciences For Women', address: 'Main Boulevard Road', country: 'India' },
  {name: 'United Institute of Health Sciences', address: 'Main Boulevard Road', country: 'US' },
  {name: 'Behria Hospitals'}
]
institutes.each do |i|
  HealthInstitute.create!(name: i[:name], address: i[:address], country: i[:country])
end

puts "===> Institutes Created"
