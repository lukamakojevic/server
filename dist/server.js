"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const worker_routes_1 = __importDefault(require("./routes/worker.routes"));
const caterer_routes_1 = __importDefault(require("./routes/caterer.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: '50mb' }));
mongoose_1.default.connect('mongodb://localhost:27017/turisticke_usluge');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongo ok');
});
const router = express_1.default.Router();
router.use('/users', user_routes_1.default);
router.use('/admin', admin_routes_1.default);
router.use('/worker', worker_routes_1.default);
router.use('/caterer', caterer_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map