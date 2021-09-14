//
//  main.cpp
//  jot
//
//  Created by Jeffrey Mataya on 9/13/21.
//

#include <iostream>

#include "lib/notes_repository.hpp"

using namespace std;

int main(int argc, const char * argv[]) {
    auto repo = new NotesRepository();
    auto note = repo->create_note("123");
    note->set_contents("I am a meat popsicle");
    
    cout << "Created a note: " << note->get_id() << endl;
    cout << "Contents: " << note->get_contents() << endl;
    
    return 0;
}
