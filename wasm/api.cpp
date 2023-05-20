#include <string>

extern "C" {
    void init () {
    }

    size_t length (const char *s) {
        return std::string(s).length();
    }
}
