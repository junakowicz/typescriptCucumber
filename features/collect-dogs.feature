# features/collect-dogs.feature

Feature: Dog pound can collect dogs from the street
  As a dog pound manager
  I want all unlicensed dogs to be collected from the street
  So that all dogs can live in small cage

  Scenario: Collect any unlicensed dog from the street
    Given there are dogs among animals on the street
       | name        | type| 
       | White fang  | DOG | 
       | Milka       | COW | 
       | Red         | FOX | 
       | Scooby      | DOG | 

    When only dogs are put into cage
    Then I can check what captured dog name is